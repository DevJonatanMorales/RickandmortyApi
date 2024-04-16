import { ChangeEvent, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useGetTodoByNameQuery } from "../../apis/RickandApi";
import { setPersonas } from "../../features/rickandSlice";
import { useDispatch } from "react-redux";
import { PaginationTable } from "../Pagination/PaginationTable";

export function Header() {
  const [searchText, setSearchText] = useState<string>("");
  const { data } = useGetTodoByNameQuery(searchText);
  const dispatch = useDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (data) dispatch(setPersonas(data.results));
  }, [data]);

  return (
    <Navbar bg="dark" className="fixed-top" expand="lg">
      <Container className="d-flex justify-content-between">
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

        <PaginationTable />
      </Container>
    </Navbar>
  );
}
