"use client";
import React, { useState } from "react";
import Card from "./card";
import { useStore } from "../store";

const Walets = () => {
  const { data3, setData3 } = useStore();
  const exchangeName = "coinbase-exchange";
  console.log(data3);
  return (
    <>
      <div>walets:{data3.binance?.name}</div>;
      <img src={data3.binance?.logo} alt="" />
      <p>{data3.binance?.description}</p>
      <a href="https://www.binance.com/">sitio web</a>
      <div>walets: {data3[exchangeName]?.name}</div>
      <img src={data3[exchangeName]?.logo} alt="" />
      <p>{data3[exchangeName]?.description}</p>
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
