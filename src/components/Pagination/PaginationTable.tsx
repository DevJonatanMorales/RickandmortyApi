import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { info } from "../../models/info";
import { ellipsisStore } from "../../models/ellipsis";

export interface infoState {
  info: info;
}

export const PaginationTable = () => {
  const [pagina, setPagina] = useState<number>(1);

  const [ellipsis, setEllipsis] = useState<ellipsisStore>({
    inicio: 0,
    fin: 0,
  });

  const generarRango = (desde: number, hasta: number) => {
    return Array.from({ length: hasta - desde + 1 }, (_, i) => i + desde);
  };



  return (<div
      className="bg-dark"
    >
      <div className="col-3 text-white d-flex justify-content-between py-2 px-1">
        <Button
          variant="secondary"
          className="m-1"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </Button>
        <Button
          variant="secondary"
          className="m-1"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </Button>
      </div>
    </div> )
    
};
