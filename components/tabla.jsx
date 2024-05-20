"use client";
import React from "react";
import Link from "next/link";
import "./Tabla.css";

const Table = ({ data }) => {
  // Verifica si data es un array
  if (!Array.isArray(data)) {
    return <p>No hay datos disponibles</p>;
  }
  console.log(data);
  return (
    <div className="container" id="cryptos">
      <h2 className="title">Lista de Criptomonedas:</h2>
      <div className="container-cards">
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
            const fechaFormateada2 = fecha2.toLocaleDateString(
              "es-ES",
              options
            );

            return (
              <div key={item.id} className="card">
                <Link href={`/detalle/${encodeURIComponent(item.name)}`}>
                  <div className="card-content">
                    <strong className="item">{item.name}</strong>
                    <strong className="item-symbol">({item.symbol})</strong>
                    <strong>Rank: #{item.rank}</strong>
                  </div>
                </Link>
                <p className="datos-cotizacion">
                  Primer dato de cotización:{" "}
                  <b className="fechas">{fechaFormateada}</b>
                </p>
                <p className="datos-cotizacion">
                  Ultimo dato de cotización:{" "}
                  <b className="fechas">{fechaFormateada2}</b>
                </p>
                <div className="container-detalles">
                  <a
                    href={`/detalle/${encodeURIComponent(item.name)}`}
                    className="btn"
                  >
                    Ver más detalles
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
