import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { info } from "../../models/info";
import { ellipsisStore } from "../../models/ellipsis";
import { RickandApi, useGetPaginaQuery } from "../../apis/RickandApi";

export interface infoState {
  info: info;
}

export const PaginationTable = () => {
  const [pagina, setPagina] = useState<number>(1);
  const rickandApi = useSelector((state) => state[RickandApi.reducerPath]);
  //const { pages: paginas, next: siguiente, prev: anterior } = info;

  const [ellipsis, setEllipsis] = useState<ellipsisStore>({
    inicio: 0,
    fin: 0,
  });

  const generarRango = (desde: number, hasta: number) => {
    return Array.from({ length: hasta - desde + 1 }, (_, i) => i + desde);
  };

  useEffect(() => {
    console.log({rickandApi:rickandApi.queries.getAll});
    
  },[rickandApi])

  /* useEffect(() => {
    const maxPaginasEnRango = 3;

    let inicioRango = Math.max(1, pagina - Math.floor(maxPaginasEnRango / 2));
    let finRango = inicioRango + maxPaginasEnRango - 1;

    if (finRango > paginas) {
      finRango = paginas;
      inicioRango = Math.max(1, finRango - maxPaginasEnRango + 1);
    }

    setEllipsis({
      inicio: inicioRango,
      fin: finRango,
    });
  }, [pagina, paginas]); */

  return <h1>paginacion</h1>;    {/* <div
      className="bg-dark fixed-bottom"
      style={{
        overflow: "auto",
      }}
    >
      <div className="col-xl-6 col-lg-9 col-md-12 mx-auto text-white d-flex justify-content-between py-2 px-1 scrollSpy ">
        <Button
          variant="secondary"
          className="m-1"
          disabled={anterior != null ? false : true}
          onClick={():void => {
            setPagina(1)
          }}
        >
          <i className="fa-solid fa-angles-left"></i>
        </Button>
        <Button
          variant="secondary"
          className="m-1"
          disabled={anterior != null ? false : true}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </Button>

        {/* Botones de rango o ellipsis }
        {ellipsis.inicio > 1 && (
          <Button
            variant="secondary"
            className="m-1"
            onClick={(): void => {
              setPagina(1);
            }}
          >
            1
          </Button>
        )}
        {ellipsis.inicio > 2 && (
          <Button variant="secondary" className="m-1">
            ...
          </Button>
        )}
        {generarRango(ellipsis.inicio, ellipsis.fin).map((value) => (
          <Button
            key={value}
            variant="secondary"
            className="m-1"
            onClick={(): void => {
              setPagina(value);
            }}
          >
            {value}
          </Button>
        ))}
        {ellipsis.fin < paginas - 1 && (
          <Button variant="secondary" className="m-1">
            ...
          </Button>
        )}
        {ellipsis.fin < paginas && (
          <Button variant="secondary" className="m-1">
            {paginas}
          </Button>
        )}

        <Button
          variant="secondary"
          className="m-1"
          disabled={siguiente != null ? false : true}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </Button>
        <Button
          variant="secondary"
          className="m-1"
          disabled={siguiente != null ? false : true}
          onClick={():void => {
            setPagina(paginas)
          }}
        >
          <i className="fa-solid fa-angles-right"></i>
        </Button>
      </div>
    </div> */}
    
};
