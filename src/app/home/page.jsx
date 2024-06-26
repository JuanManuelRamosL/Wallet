"use client";
import "../page-module.css";
import Header from "../../../components/header";
import Table from "../../../components/tabla";
import axios from "axios";
import { useStore } from "../../../store";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Walets from "../../../components/wallets";
import Link from "next/link";
import Nav from "../../../components/nav";
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

  const { data: session } = useSession();

  const API = "https://wallet-back.vercel.app/map";
  const API2 = "https://wallet-back.vercel.app/map2";
  const API3 = "https://wallet-back.vercel.app/exchange";
  const API4 = "https://wallet-back.vercel.app/map3";
  const userAPI = "https://wallet-back.vercel.app/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response, response2, response3, response4] = await Promise.all([
          axios.get(API),
          axios.get(API2),
          axios.get(API3),
          axios.get(API4),
        ]);

        setData(response.data.data);
        setData2(response2.data.data);
        setData3(response3.data.data);
        setData4(response4.data.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [setData, setData2, setData3, setData4]);

  useEffect(() => {
    if (session) {
      const createUser = async () => {
        try {
          const response = await axios.post(userAPI, {
            first_name: session.user.name,
            last_name: session.user.name,
            email: session.user.email,
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
  }, [session, setId]);

  console.log(id); //no puedo guardar el id aun

  return (
    <>
      <Nav />
      <div>
        <Header />
      </div>
      <Table data={data} />
      <Walets />
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
