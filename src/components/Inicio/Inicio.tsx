import { useEffect, useState } from "react";
import { useGetAllQuery } from "../../apis/RickandApi";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DetallePersonaje } from "../DetallePersonaje/DetallePersonaje";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setPersonas } from "../../features/rickandSlice";
import { Personaje } from "../../models/personaje";
import { getPagina } from "../../hooks/usePagina";
import { setInfo } from "../../features/infoSlice";

interface DefaultState {
  creado: string;
  genero: string;
  image: string;
  name: string;
  especie: string;
  type: string;
}

export function Inicio() {
  const [detallePersonaje, setDetallePersonaje] = useState<DefaultState>(
    {} as DefaultState
  );
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const personajes = useSelector((state: RootState) => state.personajes);

  const dispatch = useDispatch();
  const { data } = useGetAllQuery(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModal = (
    created: string,
    gender: string,
    img: string,
    nom: string,
    species: string,
    type: string
  ) => {
    setDetallePersonaje({
      creado: created,
      genero: gender,
      image: img,
      name: nom,
      especie: species,
      type: type,
    });
  };

  useEffect(() => {
    if (data) {
      const { results, info } = data;
      setIsloading(false);
      dispatch(setPersonas(results));
      dispatch(
        setInfo({
          siguiente: getPagina(info.next),
          anterior: getPagina(info.prev),
        })
      );
    }
  }, [data, dispatch]);

  return (
    <>
      <style type="text/css">
        {`
          .bgBtn {
            background-color: #425A7D;
            border-color: #425A7D;
          }
          .bgBtn:hover {
            background-color: #749DDA;
            border-color: #749DDA;
          }
        `}
      </style>
      <Container className="mt-5 mb-3 p-0" tabIndex={-1}>
        <Row xs={1} md={2} className="g-4 justify-content-center mt-5 pt-5">
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            personajes.map((personaje: Personaje) => (
              <Card
                className="mx-2 p-0"
                style={{
                  minHeight: "275px",
                  maxWidth: "12rem",
                  width: "50%",
                  backgroundColor: "#A0C0D6",
                }}
                key={personaje.id}
                tabIndex={personaje.id}
              >
                <Card.Img variant="top" src={personaje.image} />
                <Card.Body className="position-relative p-0">
                  <Button
                    style={{ width: "100%", height: '100%' }}
                    className="position-absolute bottom-0 right-0 bgBtn rounded-0"
                    onClick={() => {
                      handleShow();
                      OpenModal(
                        personaje.created,
                        personaje.gender,
                        personaje.image,
                        personaje.name,
                        personaje.species,
                        personaje.type
                      );
                    }}
                  >
                    {personaje.name}
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bgHeader text-white">
          <Modal.Title> {detallePersonaje.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bgApp">
          <DetallePersonaje detallePersonaje={detallePersonaje} />
        </Modal.Body>
        <Modal.Footer className="bgApp p-0">
          <Button className="bgBtnPag m-0 rounded-0 btn-lg w-100" onClick={handleClose}>
            CERRAR
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
