import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/?page=1");

    const [paginas, setPaginas] = useState(null)
    const [pagina, setPagina] = useState(0)
    const [siguiente, setSiguiente] = useState(null)
    const [anterior, setAnterior] = useState(null)

    const [dataPersona, setDataPersona] = useState([])

    const GetData = async () => {

        const numFilter = 42;
        const peticion = await axios.get(url);
        const { info, results } = peticion.data
        const { next, pages, prev } = info

        setAnterior(prev)
        setPaginas(pages)
        setSiguiente(next)

        if (parseInt(url.substring(url.length - 2))) {
            setPagina(url.substring(url.length - 2));
        } else {
            setPagina(url.split('')[url.length - 1]);
        }
        setDataPersona(results)
    }

    useEffect(() => {
        GetData();
    }, [url]);

    return (
        <DataContext.Provider value={{ dataPersona, setUrl, pagina, paginas, siguiente, anterior }}>
            {children}
        </DataContext.Provider>
    )
}