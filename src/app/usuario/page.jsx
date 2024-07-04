"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import "./usuario.css";
import NavSecundario from "../../../components/nav-secundario";
import { signIn, useSession, isLoading, error, signOut } from "next-auth/react";
import { useStore } from "../../../store";
import axios from "axios";

const Usuario = () => {
  const { data: session } = useSession();
  const [menuVisible, setMenuVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const { user } = useStore();

  const API_UPDATE = "https://wallet-back.vercel.app/update";
  const update = async () => {
    try {
      const response = await axios.post(API_UPDATE, {
        email: session?.user?.email || user?.email,
        newPassword: newPassword,
      });
      console.log("actualizado", response.data);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos del usuario</div>;
  }

  if (!session) {
    return <div>No se ha iniciado sesión</div>;
  }

  return (
    <div className="container-general-perfil-user">
      <NavSecundario />

      <div className="container-perfil-user">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-edit-image-user"
        >
          <path
            d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon-pen"
          />
        </svg>
        <div className="container-ui">
          {session ? (
            <>
              <img
                src={session.user.image}
                alt="User Profile"
                className="img-user"
              />
              <p>{session.user.email}</p>
              <h1>¡Hola, {session.user.name}</h1>
            </>
          ) : (
            <>
              <img src="./user.png" alt="User Profile" className="img-user2" />
              <p>{user.email}</p>
              <h1>¡Hola, {user.first_name}</h1>
            </>
          )}
        </div>

        <div className="container-datos">
          <button className="button-gestionar-cuenta" onClick={toggleMenu}>
            Gestioná tu cuenta
          </button>
        </div>

        <div
          className={`container-datos-cuenta ${menuVisible ? "visible" : ""}`}
        >
          <p className="txt-name">Nickname: {session.user.name}</p>
          <div className="password-user">
            {!session ? (
              <>
                <p className="txt-contraseña">Contraseña:</p>
                <input
                  type="password"
                  className="input-password"
                  placeholder="nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button className="button-cambiar-contraseña" onClick={update}>
                  Cambiar contraseña
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario;
