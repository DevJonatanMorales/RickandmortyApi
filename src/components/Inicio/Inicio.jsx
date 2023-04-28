import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext"

// bootstrap
import Row from "react-bootstrap/Row";
import Spinner from 'react-bootstrap/Spinner';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const defaultPersona = {
  creado: '',
  genero: '',
  image: '',
  name: '',
  especie: '',
  type: ''
}

export function Inicio() {
  const { dataPersona, data } = useContext(DataContext)
  
  const [detallePersonaje, setDetallePersonaje] = useState(defaultPersona)

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OpenModal = (created, gender,img, nom, species, type) => {
    setDetallePersonaje(defaultPersona);
    setDetallePersonaje({
      creado: created,
      genero: gender,
      image:img,
      name: nom,
      especie: species,
      type: type
    })
  }

    useEffect(() => {
      dataPersona
    }, [data]);

  return (
    <>
    <Container className="p-4" tabIndex={-1}>
      <Row xs={1} md={2} className="g-4">
        {dataPersona != null
          ? dataPersona.map((personaje) => (
              <Card
                className="m-2 d-flex flex-column p-2"
                style={{ minHeight: '320px', width: "12rem"  }}
                bg="secondary"
                key={personaje.id}
                tabIndex={personaje.id}
              >
                <Card.Img className="rounded" variant="top" src={personaje.image} />
                <Card.Body className="position-relative">
                  <Card.Title>{personaje.name}</Card.Title>
                  <Button
                    style={{width: "80%"}}
                    variant="dark" 
                    className="position-absolute bottom-0" 
                    onClick={() => {
                      handleShow()
                      OpenModal(
                        personaje.created, 
                        personaje.gender,
                        personaje.image,
                        personaje.name, 
                        personaje.species,
                        personaje.type)
                    }}>
                    Detalles
                  </Button>
                </Card.Body>
              </Card>
            ))
          : <Spinner animation="border" />}
      </Row>
    </Container>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {detallePersonaje.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
          <div className="col">
            <img 
              style={{width: "12rem"  }}
              src={detallePersonaje.image}
              alt={detallePersonaje.name}
            />
          </div>
          <div className="col">
            <p className="fs-6">Creado: {detallePersonaje.creado}</p>
            <p className="fs-6">Genero: {detallePersonaje.genero} </p>
            <p className="fs-6">Especie: {detallePersonaje.especie} </p>
            <p className="fs-6">Tipo: {detallePersonaje.type} </p>
          </div>
          </div>
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
