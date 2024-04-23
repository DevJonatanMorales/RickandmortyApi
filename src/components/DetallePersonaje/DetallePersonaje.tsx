import React from "react";

export const DetallePersonaje = ({detallePersonaje}) => {
  const { image, name, creado, genero, especie, type } = detallePersonaje;
  return (
    <div className="row">
      <div className="col">
        <img style={{ width: "12rem" }} src={image} alt={name} />
      </div>
      <div className="col">
        <p className="fs-6">Creado: {creado}</p>
        <p className="fs-6">Genero: {genero} </p>
        <p className="fs-6">Especie: {especie} </p>
        <p className="fs-6">Tipo: {type} </p>
      </div>
    </div>
  );
};
