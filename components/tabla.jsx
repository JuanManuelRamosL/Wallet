"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import Link from "next/link";

const Table = () => {
  const [data, setData] = useState([]);
  const API = "http://localhost:3100/map";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <h2 className="title">Lista de Criptomonedas:</h2>
      <ul className="list">
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/detalle/${encodeURIComponent(item.name)}`}>
              <p className="link-style">
                <strong className="item">{item.name}</strong> ({item.symbol}) -
                Rank: {item.rank}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
