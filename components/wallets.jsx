"use client";
import React, { useState } from "react";
import Card from "./card";
import { useStore } from "../store";
import "./wallets.css";

const Walets = () => {
  const { data3, setData3 } = useStore();
  const exchangeName = "coinbase-exchange";
  console.log(data3);
  return (
    <div className="container-wallet">
    <h1 className="title-wallets" id="exchange">Wallets Principales</h1>
      <div className="container-name-image-wallet">
        <p className="name-wallet"><u>{data3.binance?.name}</u></p>
        <img
          src={data3.binance?.logo}
          alt="Imagen de Wallet"
          className="img-wallet"
        />
      </div>
      <div className="container-description-wallets">
        <p className="description-wallets">
          <h2>¿Qué es Binance?</h2>{" "}
          <p className="texto-description-wallets">
            Binance es el mayor intercambio de criptomonedas del mundo por
            volumen de comercio, con $76 mil millones en volumen diario y 90
            millones de usuarios. Ofrece más de 350 criptomonedas y miles de
            pares de comercio. El ecosistema de Binance incluye Exchange, Labs,
            Launchpad, Info, Academy, Research, Trust Wallet, Charity, y NFT.
          </p>{" "}
          <br />
          <h2>Fundadores</h2>{" "}
          <p className="texto-description-wallets">
            Binance fue cofundada en China por Changpeng Zhao (CZ) y Yi He. CZ
            es el CEO y tiene una sólida trayectoria en tecnología y negocios.
            Yi He es la directora de marketing y jefa de Binance Labs.
          </p>{" "}
          <br />
          <h2>Lanzamiento</h2>{" "}
          <p className="texto-description-wallets">
            Binance se lanzó en junio de 2017 y rápidamente se convirtió en el
            intercambio de criptomonedas más grande del mundo en 180 días.
          </p>{" "}
          <br />
          <h2>Países restringidos</h2>{" "}
          <p className="texto-description-wallets">
            Los Estados Unidos, Singapur y Ontario (Canadá) tienen restricciones
            para usar Binance. Otros países con limitaciones incluyen China,
            Malasia, Japón, Reino Unido y Tailandia. En 2019 se lanzó una
            plataforma específica para EE. UU., Binance.US.
          </p>{" "}
          <br />
          <h2>Tarifas</h2>{" "}
          <p className="texto-description-wallets">
            Binance es conocida por sus bajas tarifas. Cobra un 0.10% por
            operaciones de creador y tomador en comercio al contado. En 2022,
            anunció comercio sin tarifas para pares BTC y ETH/BUSD.
          </p>{" "}
          <br />
          <h2>Apalancamiento y comercio de margen</h2>{" "}
          <p className="texto-description-wallets">
            Binance permite comercio de margen con hasta 10X de apalancamiento y
            ofrece productos derivados como Binance Futures y Binance Options
            para incrementar el apalancamiento en las operaciones.
          </p>
        </p>
      </div>
      <div className="container-datos-wallet">
        <a href="https://www.binance.com/" className="datos-wallet"><u>Sitio web</u></a>
        <p className="exchange ">{data3[exchangeName]?.name}</p>
      </div>

      <img src={data3[exchangeName]?.logo} alt="" />
      <p className="description-wallets">{data3[exchangeName]?.description}</p>
      <a
        href={data3[exchangeName]?.urls.website[0]}
        target="_blank"
        rel="noopener noreferrer"
      >
        sitio web
      </a>
    </div>
  );
};

export default Walets;
