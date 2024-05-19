"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./detalle.css";
export default function Detalle(name) {
  // Aquí puedes usar el parámetro name para recuperar los detalles relevantes del elemento
  const crypto = name.params.detalle;

  const [data, setData] = useState({});
  const [dataP, setDataP] = useState({});
  const API = `http://localhost:3100/info`;
  const APIP = `http://localhost:3100/price`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(API, { name: crypto });
        const responseP = await axios.post(APIP, { name: crypto });
        setData(response.data.data);
        setDataP(responseP.data.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [crypto]);
  console.log(data);
  console.log(dataP);
  return (
    <div>
      {Object.keys(data).length > 0 ? (
        <div>
          {Object.values(data).map((item) => (
            <div key={item.id} className="detalle-container">
              <h1>{item.name}</h1>
              <p>{item.cmc_rank}</p>
              <img src={item.logo} alt={item.id} />
              <p>Symbol: {item.symbol}</p>
              <p>{item.description}</p>
              <p>
                sitio web: <a href={item.urls.website}>{item.name}.com</a>
              </p>
              <a href={item.urls.technical_doc}>Documentacion</a>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron datos.</p>
      )}

      {Object.keys(dataP).length > 0 ? (
        <div>
          {Object.values(dataP).map((item) => (
            <div key={item.id} className="detalle-container">
              <h1>Precio actual :{item.quote.USD.price.toFixed(2)} $</h1>
              <h1>Volumen 24hs :{item.quote.USD.volume_24h.toFixed(2)} $</h1>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron datos de precio.</p>
      )}
    </div>
  );
}
