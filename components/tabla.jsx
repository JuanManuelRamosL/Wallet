"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./Tabla.css";
import { useUser } from "@auth0/nextjs-auth0/client";

const SkeletonLoader = () => {
  return (
    <div className="container" id="cryptos">
      <h1 className="title">Lista de Criptomonedas:</h1>
      <div className="container-cards">
        <div className="card-container">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="card skeleton-card">
              <div className="card-content">
                <strong className="item skeleton-item"></strong>
                <strong className="item-symbol skeleton-item"></strong>
                <strong className="skeleton-item"></strong>
              </div>
              <p className="datos-cotizacion skeleton-text"></p>
              <p className="datos-cotizacion skeleton-text"></p>
              <div className="container-detalles">
                <div className="btn skeleton-btn"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Table = ({ data }) => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return <SkeletonLoader />;
  }

  // Verifica si data es un array
  if (!Array.isArray(data)) {
    return <p>No hay datos disponibles</p>;
  }

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
