import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { DataContext } from "../../context/DataContext";

export const Pagination = () => {
  const { setUrl, pagina, paginas, siguiente, anterior } =
    useContext(DataContext);
  const [ellipsis, setEllipsis] = useState(0);

  const generarRango = (desde, hasta) => {
    return Array.from({ length: hasta - desde + 1 }, (_, i) => i + desde);
  };

  useEffect(() => {
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
  }, [pagina, paginas]);

  return (
    <div className="bg-dark fixed-bottom" style={{
        overflow: "auto",
      }}>
      <div className="col-xl-6 col-lg-9 col-md-12 mx-auto text-white d-flex justify-content-between py-2 px-1 scrollSpy ">
        <Button
          variant="secondary"
          className="m-1"
          onClick={() => {
            setUrl("https://rickandmortyapi.com/api/character/?page=1");
          }}
          disabled={anterior != null ? false : true}
        >
          <i className="fa-solid fa-angles-left"></i>
        </Button>
        <Button
          variant="secondary"
          className="m-1"
          onClick={() => {
            setUrl(anterior);
          }}
          disabled={anterior != null ? false : true}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </Button>

        {/* Botones de rango o ellipsis */}
        {ellipsis.inicio > 1 && (
          <Button
            variant="secondary"
            className="m-1"
            onClick={() => {
              setUrl("https://rickandmortyapi.com/api/character/?page=1");
            }}
          >
            1
          </Button>
        )}
        {ellipsis.inicio > 2 && (
          <Button
            variant="secondary"
            className="m-1"
            onClick={() => {
              setUrl(anterior);
            }}
          >
            ...
          </Button>
        )}
        {generarRango(ellipsis.inicio, ellipsis.fin).map((value) => (
          <Button
            key={value}
            variant="secondary"
            className="m-1"
            onClick={() => {
              setUrl(
                `https://rickandmortyapi.com/api/character/?page=${value}`
              );
            }}
          >
            {value}
          </Button>
        ))}
        {ellipsis.fin < paginas - 1 && (
          <Button
            variant="secondary"
            className="m-1"
            onClick={() => {
              setUrl(siguiente);
            }}
          >
            ...
          </Button>
        )}
        {ellipsis.fin < paginas && (
          <Button
            variant="secondary"
            className="m-1"
            onClick={() => {
              setUrl(
                `https://rickandmortyapi.com/api/character/?page=${paginas}`
              );
            }}
          >
            {paginas}
          </Button>
        )}

        <Button
          variant="secondary"
          className="m-1"
          onClick={() => {
            setUrl(siguiente);
          }}
          disabled={siguiente != null ? false : true}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </Button>
        <Button
          variant="secondary"
          className="m-1"
          onClick={() => {
            setUrl(
              `https://rickandmortyapi.com/api/character/?page=${paginas}`
            );
          }}
          disabled={siguiente != null ? false : true}
        >
          <i className="fa-solid fa-angles-right"></i>
        </Button>
      </div>
    </div>
  );
};
