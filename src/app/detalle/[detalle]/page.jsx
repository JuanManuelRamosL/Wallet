"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./detalle.css";
import { useStore } from "../../../../store";
import Header from "../../../../components/Nav";
export default function Detalle(name) {
  // Aquí puedes usar el parámetro name para recuperar los detalles relevantes del elemento
  const crypto = name.params.detalle;

  const [dataL, setDataL] = useState({});
  const [dataP, setDataP] = useState({});
  const API = `http://localhost:3100/info`;
  const APIP = `http://localhost:3100/price`;
  const { data, setData, setData2, setData3, data3, setData4, data4 } =
    useStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(API, { name: crypto });
        const responseP = await axios.post(APIP, { name: crypto });
        setDataL(response.data.data);
        setDataP(responseP.data.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [crypto]);
  console.log(dataL);
  console.log(dataP);
  return (
    <div className="container-detalle">
      <div className="container-header">
        <Header></Header>
      </div>
      <div className="container-general-detalle">
        {Object.keys(dataP).length > 0 ? (
          <div className="container-izq">
            <div className="container-options-cotizacion">
              <label className="label-cotizacion">
                Cotizacion a:
                <select name="" id="" className="select-options-cotizacion">
                  <option value="" className="options-time-cotizacion">
                    24hs
                  </option>
                  <option value="" className="options-time-cotizacion">
                    1 Semana
                  </option>
                  <option value="" className="options-time-cotizacion">
                    1 Mes
                  </option>
                </select>
              </label>
            </div>
            {Object.values(dataP).map((item) => (
              <>
                <div className="container-grafico">
                  <img
                    src="../img-user/img-grafico.jpeg"
                    alt=""
                    className="grafico"
                  />
                </div>
                <div className="container-datos-actual-moneda">
                  <h3 className="datos">
                    Precio actual: ${item.quote.USD.price.toFixed(2)}{" "}
                  </h3>
                  <h3 className="datos">
                    Volumen 24hs: ${item.quote.USD.volume_24h.toFixed(2)}{" "}
                  </h3>
                </div>
                <p className="position-ranking">Posición en el Ranking #1</p>
              </>
            ))}
          </div>
        ) : (
          <p>No se encontraron datos de precio.</p>
        )}

        {Object.keys(dataL).length > 0 ? (
          <div>
            {Object.values(dataL).map((item) => (
              <div className="container-der">
                <div key={item.id} className="detalle-container">
                  <div className="detalle-container">
                    <div className="container-name-image-moneda">
                      <h1 className="name-moneda">{item.name}</h1>
                      <p className="symbol-moneda">{item.symbol}</p>
                      <img
                        src={item.logo}
                        alt={item.id}
                        className="img-moneda"
                      />
                    </div>
                    <p className="texto-description-moneda">
                    Bitcoin (BTC) es una criptomoneda lanzada en 2010, generada a través de la minería. Tiene una oferta actual de 19,701,412 y su último precio conocido es de 69,738.03109532 USD, con un aumento del 2.20% en las últimas 24 horas. Se negocia en 11,056 mercados activos con un volumen de comercio de $59,267,993,809.96 en el mismo período. Más información en bitcoin.org.
                    </p>

                    <div className="container-links-moneda">
                      <p className="sitio-web-moneda">
                        Sitio web:{" "}
                        <a href={item.urls.website} target="_blank" className="link-web">
                          <u>{item.name}.com</u>
                        </a>
                      </p>
                      <a href={item.urls.technical_doc}>
                        <u className="txt-documentacion">Documentación</u>
                      </a>
                      {/* <p>{item.cmc_rank}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron datos.</p>
        )}
      </div>
    </div>
  );
}
