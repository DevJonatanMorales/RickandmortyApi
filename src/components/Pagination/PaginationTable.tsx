import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { RootState } from "../../app/store";
import { useGetPaginaQuery } from "../../apis/RickandApi";
import { setPersonas } from "../../features/rickandSlice";
import { setInfo } from "../../features/infoSlice";
import { getPagina } from "../../hooks/usePagina";

export const PaginationTable = () => {
  const [pag, setPag] = useState<number>(1);

  const info = useSelector((state: RootState) => state.info);
  const dispatch = useDispatch();
  const { data } = useGetPaginaQuery(pag);

  useEffect(() => {
    if (data) {
      const { results, info } = data;
      dispatch(setPersonas(results));
      dispatch(
        setInfo({
          siguiente: getPagina(info.next),
          anterior: getPagina(info.prev),
        })
      );
    }
  }, [data]);

  return (
    <>
      <style type="text/css">
        {`
          .bgBtnPag {
            background-color: #DF7356;
            border-color: #DF7356;
          }
          .bgBtnPag:hover {
            background-color: #B35E46;
            border-color: #B35E46;
          }
        `}
      </style>

      <div>
        <div className="col-3 text-white d-flex justify-content-between py-2 px-1">
          <Button
            className="m-1 bgBtnPag"
            value={info.anterior}
            onClick={() => {
              setPag(info.anterior);
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </Button>
          <Button
            className="m-1 bgBtnPag"
            value={info.siguiente}
            onClick={() => {
              setPag(info.siguiente);
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </>
  );
};
