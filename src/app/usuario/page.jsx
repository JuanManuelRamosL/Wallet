"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import "./usuario.css";
import NavSecundario from "../../../components/nav-secundario";

const Usuario = () => {
  const { error, isLoading, user } = useUser();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos del usuario</div>;
  }

  if (!user) {
    return <div>No se ha iniciado sesión</div>;
  }

  return (
    <>
      <NavSecundario />
      <div className="cardd">
        <div className="infos">
          <div className="image">
            <img src={user.picture} alt="User Profile" />
          </div>
          <div className="info">
            <div>
              <h1 className="name">{user.nickname}</h1>
              <p className="function">{user.email}</p>
            </div>
            <div className="stats">
              <p className="flex flex-col">
                Usuario Verificado
                <span className="state-value">34</span>
              </p>
            </div>
          </div>
        </div>
        <button className="request" type="button">
          <a className="button__logout" href="/api/auth/logout">
            Log Out
          </a>
        </button>
      </div>
    </>
  );
};

export default Usuario;
