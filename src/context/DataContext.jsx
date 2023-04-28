import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const DataContext = createContext();

const defaultData = {
    accion: 'all',
    valor: ''
}
export const DataProvider = ({ children }) => {
    const [dataPersona, setDataPersona] = useState([])
    const [data, setData] = useState(defaultData)
    const GetData = async () => {
        let url = 'https://rickandmortyapi.com/api/character'
        switch (data.accion) {
            case 'search':
                url = `https://rickandmortyapi.com/api/character/?name=${data.valor}`
                break;

            case 'all':
                url = 'https://rickandmortyapi.com/api/character'
                break;
        }

        const peticion = await axios.get(url);
        setDataPersona(peticion.data.results)
    }

    useEffect(()=>{
        GetData();
    },[data]);

    return (
        <DataContext.Provider value={{dataPersona, data, setData}}>
            {children}
        </DataContext.Provider>
    )
}