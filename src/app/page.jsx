"use client";
import "./page-module.css";
import Header from "../../components/header";
import Table from "../../components/tabla";
import axios from "axios";
import { useStore } from "../../store";

import { useEffect, useState } from "react";
import Walets from "../../components/wallets";
import Link from "next/link";
import Nav from "../../components/nav";
export default function Home() {
  const { data, setData, setData2, setData3, data3, setData4, data4 } =
    useStore();
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
  const API2 = "http://localhost:3100/map2";
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response2 = await axios.get(API2);
        setData2(response2.data.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData2();
  }, []);

  const API3 = "http://localhost:3100/exchange";
  useEffect(() => {
    const fetchData3 = async () => {
      try {
        const response3 = await axios.get(API3);
        setData3(response3.data.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData3();
  }, []);

  const API4 = "http://localhost:3100/map3";
  useEffect(() => {
    const fetchData4 = async () => {
      try {
        const response4 = await axios.get(API4);
        setData4(response4.data.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData4();
  }, []);
  console.log(data4);
  return (
    <>
      <Nav></Nav>
      <Header></Header>

      <Table data={data}></Table>
      <Walets></Walets>
      <br />
      <div className="container-footer-wallets">
        <Link href="/exchange" className="links-footer-wallets">Otras Wallets</Link>
        <a href="/api/auth/login" className="links-footer-wallets">Login</a>
        <a href="/api/auth/login" className="links-footer-wallets">Logout</a>
      </div>
    </>
  );
}
