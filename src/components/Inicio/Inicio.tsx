import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetAllQuery } from "../../apis/RickandApi";

// bootstrap
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DetallePersonaje } from "../DetallePersonaje/DetallePersonaje";
import { Personaje } from "../../models/personaje";

const defaultState = {
  creado: "",
  genero: "",
  image: "",
  name: "",
  especie: "",
  type: "",
};

export function Inicio() {
  const { data } = useGetAllQuery();
  const [detallePersonaje, setDetallePersonaje] = useState(defaultState);
  const [personajes, setPersonajes] = useState<Personaje[]|[]>([]);
  const [isLoading, setIsloading] = useState(true);
  // modal
  const [show, setShow] = useState(false);
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
    setDetallePersonaje(defaultState);
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
      setPersonajes(data?.results);
      setIsloading(false);
    }
  }, [data]); //eslint-disable-line

  return (
    <>
      <Container className="my-5 p-4" tabIndex={-1}>
        <Row xs={1} md={2} className="g-4 justify-content-center">
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            personajes.map((personaje) => (
              <Card
                className="m-2 d-flex flex-column p-2"
                style={{ minHeight: "320px", maxWidth: "12rem", width: "50%" }}
                bg="secondary"
                key={personaje.id}
                tabIndex={personaje.id}
              >
                <Card.Img
                  className="rounded"
                  variant="top"
                  src={personaje.image}
                />
                <Card.Body className="position-relative">
                  <Card.Title className="text-white">
                    {personaje.name}
                  </Card.Title>
                  <Button
                    style={{ width: "80%" }}
                    variant="dark"
                    className="position-absolute bottom-0"
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
                    Detalles
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {detallePersonaje.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetallePersonaje detallePersonaje={detallePersonaje} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
