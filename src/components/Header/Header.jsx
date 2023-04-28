import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

import { DataContext } from "../../context/DataContext";

export function Header() {

  const {data, setData} = useContext(DataContext)

  const Validar = (e) => {
    if (e.target.value === '') {
      setData({...data, accion: 'all', valor: ''})
    } else {
      setData({...data, accion: 'search', valor: e.target.value})
    }
  }

  return (
    <Navbar bg="dark" className="mb-3" expand="lg">
      <Container className="d-flex justify-content-center" fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Escribe un nombre"
            className="me-2"
            aria-label="Search"
            value={data.valor}
            onChange={(e) =>Validar(e)}
          />
        </Form>
      </Container>
    </Navbar>
  );
}
