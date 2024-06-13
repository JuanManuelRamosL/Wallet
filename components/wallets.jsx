"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useStore } from "../store";
import "./wallets.css";

const WalletSection = ({ className, title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Ajustar el umbral de visibilidad
  });

  const isIzq = className.includes("container-izq");
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0%)" : "translateX(-50%)", // Simplificar las animaciones
  });

  return (
    <animated.div ref={ref} style={animation} className={className}>
      <h2 className={`title-wallets ${isIzq ? "title-izq" : "title-der"}`}>
        {title}
      </h2>
      <p
        className={`texto-description-wallets ${
          isIzq ? "texto-izq" : "texto-der"
        }`}
      >
        {text}
      </p>
    </animated.div>
  );
};

const Wallets = () => {
  const { data3 } = useStore();
  const exchangeName = "coinbase-exchange";
  return (
    <div className="container-wallet">
      <h1 className="title-wallets" id="exchange">
        Wallets Principales
      </h1>
      <div className="container-description-wallets">
        <div className="container-name-image-wallet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 5120 1024"
            className="logo-binance"
            fill="currentColor"
          >
            <path
              d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
              p-id="2935"
            ></path>
          </svg>
        </div>
        <WalletSection
          className="container-izq"
          title="¿Qué es Binance?"
          text="Binance es el mayor intercambio de criptomonedas del mundo por
          volumen de comercio, con $76 mil millones en volumen diario y 90
          millones de usuarios. Ofrece más de 350 criptomonedas y miles de
          pares de comercio. El ecosistema de Binance incluye Exchange, Labs,
          Launchpad, Info, Academy, Research, Trust Wallet, Charity, y NFT."
        />
        <br />
        <WalletSection
          className="container-der"
          title="Fundadores"
          text="Binance fue cofundada en China por Changpeng Zhao (CZ) y Yi He. CZ
          es el CEO y tiene una sólida trayectoria en tecnología y negocios.
          Yi He es la directora de marketing y jefa de Binance Labs."
        />
        <br />
        <WalletSection
          className="container-izq"
          title="Lanzamiento"
          text="Binance se lanzó en junio de 2017 y rápidamente se convirtió en el
          intercambio de criptomonedas más grande del mundo en 180 días."
        />
        <br />
        <WalletSection
          className="container-der"
          title="Países restringidos"
          text="Los Estados Unidos, Singapur y Ontario (Canadá) tienen restricciones
          para usar Binance. Otros países con limitaciones incluyen China,
          Malasia, Japón, Reino Unido y Tailandia. En 2019 se lanzó una
          plataforma específica para EE.UU. debido a regulaciones locales."
        />
        <br />
        <WalletSection
          className="container-der"
          title="Apalancamiento y comercio de margen"
          text="Binance permite comercio de margen con hasta 10X de apalancamiento y
          ofrece productos derivados como Binance Futures y Binance Options
          para incrementar el apalancamiento en las operaciones."
        />
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
      <div className="container-description-wallets">
        <div className="container-name-image-wallet">
          {/* <p className="name-wallet-2">{data3[exchangeName]?.name}</p> */}
          <img
            src={data3[exchangeName]?.logo}
            alt="Imagen de Wallet"
            className="img-wallet"
          />
          <img
            src="https://images.ctfassets.net/q5ulk4bp65r7/3d0nJDFOq4TdewlmTxQ6Eb/e94dcbc5ac72d84e812bccc8561c6b62/Consumer_Wordmark_White.svg"
            alt="Logotipo de Coinbase"
            className="logo-coinbase"
          ></img>
        </div>
        <WalletSection
          className="container-izq"
          title="¿Qué es Coinbase Exchange?"
          text="Coinbase Exchange es una plataforma de comercio e inversión en
          criptomonedas basada en EE. UU., que permite a los usuarios comprar,
          vender, intercambiar y almacenar criptomonedas. Es intuitiva y
          adecuada para principiantes, y ofrece una función de “Advanced
          Trade” para usuarios avanzados."
        />
        <br />
        <WalletSection
          className="container-der"
          title="Fundadores"
          text="Fundada en 2012 por Brian Armstrong, ex ingeniero de Airbnb, y Fred
          Ehrsam, ex comerciante de Goldman Sachs. Brian Armstrong es el CEO."
        />
        <br />
        <WalletSection
          className="container-izq"
          title="Lanzamiento"
          text="Coinbase fue lanzada en junio de 2012 en San Francisco, California."
        />
        <br />
        <WalletSection
          className="container-der"
          title="Ubicación"
          text="No tiene una oficina física; todos los empleados trabajan de forma
          remota."
        />
        <br />
        <WalletSection
          className="container-izq"
          title="Países restringidos"
          text="Disponible en más de 100 países, aunque algunas funciones pueden
          estar restringidas en ciertas áreas."
        />
        <br />
        <WalletSection
          className="container-der"
          title="Criptomonedas soportadas"
          text="Más de 150 criptomonedas, incluyendo BTC, ETH, AVAX, SOL, ADA, USDC,
          DOGE, MATIC y USDT."
        />
        <br />
        <WalletSection
          className="container-izq"
          title="Tarifas"
          text="Las tarifas varían entre 0.00% y 0.60% dependiendo del volumen de
          comercio. Los depósitos y retiros tienen tarifas que varían según el
          método utilizado."
        />
        <br />
        <WalletSection
          className="container-der"
          title="Apalancamiento y comercio de margen"
          text="Coinbase Pro permitía hasta 3X de apalancamiento en 2020, pero el
          comercio de margen fue deshabilitado en noviembre de 2020 por
          razones regulatorias."
        />
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

export default Wallets;
