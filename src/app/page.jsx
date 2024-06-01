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
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Home() {
  const {
    data,
    setData,
    setData2,
    setData3,
    data3,
    setData4,
    data4,
    setId,
    id,
  } = useStore();
  const { error, isLoading, user } = useUser();
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

  const userAPI = "http://localhost:3100/users";
  useEffect(() => {
    if (user) {
      const createUser = async () => {
        try {
          const response = await axios.post(userAPI, {
            first_name: user.nickname,
            last_name: user.given_name,
            email: user.email,
            favs: [], // Puedes ajustar esto según tu aplicación
          });
          console.log("Usuario", response.data.id);
          setId(response.data.id);
        } catch (error) {
          console.error("Error al crear el usuario:", error);
        }
      };

      createUser();
    }
  }, [user]);
  console.log(id); //no puedo guardar el id aun
  return (
    <>
      <Nav></Nav>
      <Header></Header>

      <Table data={data}></Table>
      <Walets></Walets>
      <br />
      <div className="container-footer-wallets">
        <Link href="/exchange" className="links-footer-wallets">
          Otras Wallets
        </Link>
        <a href="/api/auth/login" className="links-footer-wallets">
          Login
        </a>
        <a href="/api/auth/login" className="links-footer-wallets">
          Logout
        </a>
      </div>
    </>
  );
}
