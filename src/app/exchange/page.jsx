"use client";
import React from "react";
import { useStore } from "../../../store";
import "./estilos.css";
import Nav from "../../../components/nav";
import NavSecundario from "../../../components/nav-secundario";

const Exchange = () => {
  const { data4 } = useStore();

  if (!data4) {
    return <p>No hay datos disponibles</p>;
  }
  console.log(data4);
  return (
    <div>
      <NavSecundario></NavSecundario>
      <h1 className="title-exchanges">Exchanges</h1>
      <div className="container-cards-exchange">
        {data4.map((exchange) => (
          <div key={exchange.id} className="cards-exchanges">
            <h2 className="name-exchange"><u className="underline">{exchange.name}</u></h2>
            <p className="info-exchanges">Nombre: {exchange.slug}</p>
            <p className="info-exchanges">Activo: {exchange.is_active ? "Sí" : "No"}</p>
            <p className="info-exchanges">Redistribuible: {exchange.is_redistributable ? "Sí" : "No"}</p>
            <p className="info-exchanges">
              Primera fecha histórica:{" "}
              {new Date(exchange.first_historical_data).toLocaleDateString()}
            </p>
            <p className="info-exchanges">
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
