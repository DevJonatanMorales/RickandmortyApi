import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { DataContext } from '../../context/DataContext';

export const Pagination = () => {
    const { setUrl, pagina, paginas, siguiente, anterior } = useContext(DataContext)

    return (
        <Container className="bg-dark text-white fixed-bottom d-flex justify-content-center p-2" fluid>
            <Button
                variant="secondary"
                className='my-auto mx-2'
                onClick={() => {
                    setUrl("https://rickandmortyapi.com/api/character/?page=1")
                }}
                disabled={(anterior != null) ? false : true}
            >
                <i className="fa-solid fa-angles-left"></i>
            </Button>
            <Button
                variant="secondary"
                className='my-auto'
                onClick={() => {
                    setUrl(anterior)
                }}
                disabled={(anterior != null) ? false : true}
            >
                <i className="fa-solid fa-chevron-left"></i>
            </Button>
            <p className='my-auto mx-3'> {pagina} / {paginas} </p>
            <Button
                variant="secondary"
                className='my-auto'
                onClick={() => {
                    setUrl(siguiente)
                }}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </Button>
            <Button
                variant="secondary"
                className='my-auto mx-2'
                onClick={() => {
                    setUrl(`https://rickandmortyapi.com/api/character/?page=${paginas}`)
                }}
            >
                <i className="fa-solid fa-angles-right"></i>
            </Button>
        </Container>
    )
}
