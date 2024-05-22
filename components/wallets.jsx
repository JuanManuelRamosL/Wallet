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
      <h1 className="title-wallets" id="exchange">
        Wallets Principales
      </h1>
      <div className="container-name-image-wallet">
        <p className="name-wallet">
          <u>{data3.binance?.name}</u>
        </p>
        <img
          src={data3.binance?.logo}
          alt="Imagen de Wallet"
          className="img-wallet"
        />
      </div>
      <div className="container-description-wallets">
        <h2 className="title-wallets">¿Qué es Binance?</h2>{" "}
        <p className="texto-description-wallets">
          Binance es el mayor intercambio de criptomonedas del mundo por volumen
          de comercio, con $76 mil millones en volumen diario y 90 millones de
          usuarios. Ofrece más de 350 criptomonedas y miles de pares de
          comercio. El ecosistema de Binance incluye Exchange, Labs, Launchpad,
          Info, Academy, Research, Trust Wallet, Charity, y NFT.
        </p>{" "}
        <br />
        <h2 className="title-wallets">Fundadores</h2>{" "}
        <p className="texto-description-wallets">
          Binance fue cofundada en China por Changpeng Zhao (CZ) y Yi He. CZ es
          el CEO y tiene una sólida trayectoria en tecnología y negocios. Yi He
          es la directora de marketing y jefa de Binance Labs.
        </p>{" "}
        <br />
        <h2 className="title-wallets">Lanzamiento</h2>{" "}
        <p className="texto-description-wallets">
          Binance se lanzó en junio de 2017 y rápidamente se convirtió en el
          intercambio de criptomonedas más grande del mundo en 180 días.
        </p>{" "}
        <br />
        <h2 className="title-wallets">Países restringidos</h2>{" "}
        <p className="texto-description-wallets">
          Los Estados Unidos, Singapur y Ontario (Canadá) tienen restricciones
          para usar Binance. Otros países con limitaciones incluyen China,
          Malasia, Japón, Reino Unido y Tailandia. En 2019 se lanzó una
          plataforma específica para EE. UU., Binance.US.
        </p>{" "}
        <br />
        <h2 className="title-wallets">Tarifas</h2>{" "}
        <p className="texto-description-wallets">
          Binance es conocida por sus bajas tarifas. Cobra un 0.10% por
          operaciones de creador y tomador en comercio al contado. En 2022,
          anunció comercio sin tarifas para pares BTC y ETH/BUSD.
        </p>{" "}
        <br />
        <h2 className="title-wallets">
          Apalancamiento y comercio de margen
        </h2>{" "}
        <p className="texto-description-wallets">
          Binance permite comercio de margen con hasta 10X de apalancamiento y
          ofrece productos derivados como Binance Futures y Binance Options para
          incrementar el apalancamiento en las operaciones.
        </p>
      </div>
      <div className="container-datos-wallet">
        <a
          href="https://www.binance.com/"
          className="datos-wallet"
          target="_blank"
        >
          <u>Sitio web de la Wallet</u>
        </a>
      </div>
      <div className="container-name-image-wallet">
        <p className="name-wallet">
          <u>{data3[exchangeName]?.name}</u>
        </p>
        <img
          src={data3[exchangeName]?.logo}
          alt="Imagen de Wallet"
          className="img-wallet"
        />
      </div>
      <div className="container-description-wallets">
        <h2 className="title-wallets">¿Qué es Coinbase Exchange?</h2>
        <p className="texto-description-wallets">
          Coinbase Exchange es una plataforma de comercio e inversión en
          criptomonedas basada en EE. UU., que permite a los usuarios comprar,
          vender, intercambiar y almacenar criptomonedas. Es intuitiva y
          adecuada para principiantes, y ofrece una función de “Advanced Trade”
          para usuarios avanzados.
        </p>
        <br />
        <h2 className="title-wallets">Fundadores</h2>{" "}
        <p className="texto-description-wallets">
          Fundada en 2012 por Brian Armstrong, ex ingeniero de Airbnb, y Fred
          Ehrsam, ex comerciante de Goldman Sachs. Brian Armstrong es el CEO.
        </p>
        <br />
        <h2 className="title-wallets">Lanzamiento</h2>{" "}
        <p className="texto-description-wallets">
          Coinbase fue lanzada en junio de 2012 en San Francisco, California.
        </p>
        <br />
        <h2 className="title-wallets">Ubicación</h2>{" "}
        <p className="texto-description-wallets">
          No tiene una oficina física; todos los empleados trabajan de forma
          remota.
        </p>
        <br />
        <h2 className="title-wallets">Países restringidos</h2>{" "}
        <p className="texto-description-wallets">
          Disponible en más de 100 países, aunque algunas funciones pueden estar
          restringidas en ciertas áreas.
        </p>
        <br />
        <h2 className="title-wallets">Criptomonedas soportadas</h2>{" "}
        <p className="texto-description-wallets">
          Más de 150 criptomonedas, incluyendo BTC, ETH, AVAX, SOL, ADA, USDC,
          DOGE, MATIC y USDT.
        </p>
        <br />
        <h2 className="title-wallets">Tarifas</h2>{" "}
        <p className="texto-description-wallets">
          Las tarifas varían entre 0.00% y 0.60% dependiendo del volumen de
          comercio. Los depósitos y retiros tienen tarifas que varían según el
          método utilizado.
        </p>
        <br />
        <h2 className="title-wallets">
          Apalancamiento y comercio de margen
        </h2>{" "}
        <p className="texto-description-wallets">
          Coinbase Pro permitía hasta 3X de apalancamiento en 2020, pero el
          comercio de margen fue deshabilitado en noviembre de 2020 por razones
          regulatorias.
        </p>
        <br />
      </div>
      <div className="container-datos-wallet">
        <a
          href={data3[exchangeName]?.urls.website[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="datos-wallet"
        >
          <u>Sitio web de la Wallet</u>
        </a>
      </div>
    </div>
  );
};

export default Walets;
