import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useGetTodoByIdQuery } from "../../apis/RickandApi";
import { store } from "../../store/store";

export function Header() {
  const [searchText, setSearchText] = useState("");
  useGetTodoByIdQuery(searchText);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Navbar bg="dark" className="fixed-top" expand="lg">
      <Container className="d-flex justify-content-center" fluid>
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="search"
            placeholder="Escribe un nombre"
            className="me-2"
            aria-label="Search"
            value={searchText}
            onChange={handleSearch}
          />
        </Form>
      </Container>
    </Navbar>
  );
}
