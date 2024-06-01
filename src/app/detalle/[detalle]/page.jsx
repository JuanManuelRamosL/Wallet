"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./detalle.css";
import { useStore } from "../../../../store";
import NavSecundario from "../../../../components/nav-secundario";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Detalle(name) {
  // Aquí puedes usar el parámetro name para recuperar los detalles relevantes del elemento
  const crypto = name.params.detalle;
  const { id } = useStore();
  const { error, isLoading, user } = useUser();
  console.log(id);
  const [isfav, setIsFav] = useState(false);
  const [dataL, setDataL] = useState({});
  const [dataP, setDataP] = useState({});
  const API = `http://localhost:3100/info`;
  const APIP = `http://localhost:3100/price`;

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

  const handleAddFav = async () => {
    try {
      if (!isfav) {
        const favNames = Object.values(dataL).map((item) => item.name);
        const favsString =
          favNames.length === 1 ? favNames[0] : favNames.join(", ");

        const response = await axios.put(
          `http://localhost:3100/users/${user.email}/favs`,
          {
            favs: favsString,
          }
        );
        console.log("Favorito añadido:", response.data);
        setIsFav(true);
      }
    } catch (error) {
      console.error("Error al añadir el favorito:", error);
    }
  };

  const hendledelete = async () => {
    try {
      if (isfav) {
        const favNames = Object.values(dataL).map((item) => item.name);
        const favsString =
          favNames.length === 1 ? favNames[0] : favNames.join(", ");

        const response = await axios.delete(
          `http://localhost:3100/users/${user.email}/favss`,
          {
            data: { element: favsString },
          }
        );
        console.log("Favorito eliminado:", response.data);
        setIsFav(false);
        alert("crypto eliminada");
      }
    } catch (error) {
      console.error("Error al eliminar el favorito:", error);
    }
  };

  return (
    <div className="container-detalle">
      <NavSecundario></NavSecundario>
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
                {!isfav ? (
                  <svg
                    onClick={handleAddFav}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="icon-favorito"
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                  </svg>
                ) : (
                  <svg
                    onClick={hendledelete}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                    className="icon-favorito"
                  >
                    <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"></path>
                  </svg>
                )}
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
                      {item.description}
                    </p>

                    <div className="container-links-moneda">
                      <p className="sitio-web-moneda">
                        Sitio web:{" "}
                        <a
                          href={item.urls.website}
                          target="_blank"
                          className="link-web"
                        >
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

// http://localhost:3100/users/hmusic.proyecto@gmail.com/favss delete
