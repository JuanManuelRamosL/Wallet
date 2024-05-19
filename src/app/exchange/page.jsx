"use client";
import React from "react";
import { useStore } from "../../../store";
import "./estilos.css";

const Exchange = () => {
  const { data4 } = useStore();

  if (!data4) {
    return <p>No hay datos disponibles</p>;
  }
  console.log(data4);
  return (
    <div className="container">
      <h1>Exchanges</h1>
      <div className="cards">
        {data4.map((exchange) => (
          <div key={exchange.id} className="card">
            <h2>{exchange.name}</h2>
            <p>Nombre: {exchange.slug}</p>
            <p>Activo: {exchange.is_active ? "Sí" : "No"}</p>
            <p>Redistribuible: {exchange.is_redistributable ? "Sí" : "No"}</p>
            <p>
              Primera fecha histórica:{" "}
              {new Date(exchange.first_historical_data).toLocaleDateString()}
            </p>
            <p>
              Última fecha histórica:{" "}
              {new Date(exchange.last_historical_data).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchange;
