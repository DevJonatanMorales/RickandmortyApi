import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

import { DataContext } from "../../context/DataContext";

export function Header() {

  const { setUrl } = useContext(DataContext)

  const Validar = (e) => {
    if (e.target.value === '') {
      setUrl("https://rickandmortyapi.com/api/character/?page=1")
    } else {
      setUrl(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
    }
  }

  return (
    <Navbar bg="dark" className="fixed-top" expand="lg">
      <Container className="d-flex justify-content-center" fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Escribe un nombre"
            className="me-2"
            aria-label="Search"
            onChange={(e) => Validar(e)}
          />
        </Form>
      </Container>
    </Navbar>
  );
}
