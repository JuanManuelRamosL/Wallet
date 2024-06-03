"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import "./usuario.css";
import NavSecundario from "../../../components/nav-secundario";
const Usuario = () => {
  const { error, isLoading, user } = useUser();

  if (user) {
    console.log(user);
  }

  return (
    <>
      <NavSecundario />
      <div class="cardd">
        <div class="infos">
          <div class="image">
            {" "}
            <img src={user.picture} alt="User Profile" />
          </div>
          <div class="info">
            <div>
              <h1 className="name">{user.nickname}</h1>

              <p class="function">{user.email}</p>
            </div>
            <div class="stats">
              <p class="flex flex-col">
                Usuario Verificado
                <span class="state-value">34</span>
              </p>
            </div>
          </div>
        </div>
        <button class="request" type="button">
          <a className="button__logout" href="/api/auth/logout">
            Log Out
          </a>
        </button>
      </div>
    </>
  );
};

export default Usuario;
