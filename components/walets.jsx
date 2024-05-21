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
    <>
      <div id="exchange" className="exchange">
        {data3.binance?.name}
      </div>
      ;
      <img src={data3.binance?.logo} alt="" />
      <div className="container-description-wallets">
        <p className="description-wallets">{data3.binance?.description}</p>
      </div>
      <a href="https://www.binance.com/">sitio web</a>
      <div className="exchange">{data3[exchangeName]?.name}</div>
      <img src={data3[exchangeName]?.logo} alt="" />
      <p className="description-wallets">{data3[exchangeName]?.description}</p>
      <a
        href={data3[exchangeName]?.urls.website[0]}
        target="_blank"
        rel="noopener noreferrer"
      >
        sitio web
      </a>
    </>
  );
};

export default Walets;
