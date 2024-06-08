"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import "./usuario.css";
import NavSecundario from "../../../components/nav-secundario";
import { signIn, useSession, isLoading, error, signOut } from "next-auth/react";

const Usuario = () => {
  // const { error, isLoading, user } = useUser();
  const { data: session } = useSession();

  console.log(session);

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
    <>
      <NavSecundario />
      <div className="cardd">
        <div className="infos">
          <div className="image">
            <img src={session.user.image} alt="User Profile" />
          </div>
          <div className="info">
            <div>
              <h1 className="name">{session.user.nickname}</h1>
              <p className="function">{session.user.email}</p>
            </div>
            <div className="stats">
              <p className="flex flex-col">
                Usuario Verificado
                <span className="state-value">34</span>
              </p>
            </div>
          </div>
        </div>
        <button className="request" type="button" onClick={() => signOut()}>
          Log Out
        </button>
      </div>
    </>
  );
};

export default Usuario;
