"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./card.css";

const Card = ({ searchResult, crypto }) => {
  const [price, setPrice] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Si hay una búsqueda de criptomoneda realizada, obtenemos el precio usando el nombre de la criptomoneda de searchResult
        if (searchResult) {
          const priceResponse = await axios.post(
            "http://localhost:3100/price",
            {
              name: searchResult.name,
            }
          );
          setPrice(priceResponse.data.data); // Guardamos el precio en el estado
          setId(searchResult.id);
        }
        // Si no hay una búsqueda de criptomoneda realizada, obtenemos el precio usando el nombre de la criptomoneda de crypto
        else {
          console.log(crypto);
          const priceResponse = await axios.post(
            "http://localhost:3100/price",
            {
              name: crypto.toLowerCase(),
            }
          );
          setPrice(priceResponse.data.data); // Guardamos el precio en el estado
          console.log(priceResponse.data.data);
        }
      } catch (error) {
        console.error("Error al obtener el precio:", error);
      }
    };
    fetchData();
  }, [searchResult, crypto]); // Ejecutar el efecto cuando searchResult o crypto cambien
  console.log(searchResult);
  return (
    <div className="container-results">
      <h2 className="name-cripto">
        {searchResult ? searchResult.name : crypto}
      </h2>
      {searchResult && (
        <>
          <p>{searchResult.description}</p>
          <p className="details-cripto">Symbol: {searchResult.symbol}</p>
        </>
      )}
      <p className="details-cripto">
        Precio:USD{" "}
        {price && id ? price[id]?.quote?.USD.price.toFixed(2) : "Loading..."}
      </p>
      {/* Mostrar el precio si está disponible, de lo contrario, mostrar "Loading..." */}
    </div>
  );
};

export default Card;
