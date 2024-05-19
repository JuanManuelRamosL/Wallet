"use client";
import React from "react";
import Link from "next/link";
import "./Table.css";

const Table = ({ data }) => {
  // Verifica si data es un array
  if (!Array.isArray(data)) {
    return <p>No hay datos disponibles</p>;
  }
  console.log(data);
  return (
    <div className="container">
      <h2 className="title">Lista de Criptomonedas:</h2>
      <div className="card-container">
        {data.map((item) => {
          const fecha = new Date(item.first_historical_data);
          const fecha2 = new Date(item.last_historical_data);
          const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          };
          const fechaFormateada = fecha.toLocaleDateString("es-ES", options);
          const fechaFormateada2 = fecha2.toLocaleDateString("es-ES", options);

          return (
            <div key={item.id} className="card">
              <Link href={`/detalle/${encodeURIComponent(item.name)}`}>
                <div className="card-content">
                  <strong className="item">{item.name}</strong> ({item.symbol})
                  - Rank: {item.rank}
                </div>
              </Link>
              <p>Primer dato de cotización: {fechaFormateada}</p>
              <p>Ultimo dato de cotización: {fechaFormateada2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
