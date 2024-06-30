"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "../../../store";

export default function Login() {
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const { setUser } = useStore();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(
        "https://wallet-back.vercel.app/loginForm",
        {
          name: data.username,
          password: data.password,
        }
      );

      if (response.status === 200 && response.data.message === "Aprobado") {
        setUser(response.data.user);
        console.log("Login successful:", response.data.user);
        router.push("/");
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Hubo un error al autenticar el usuario.");
    }
  });

  return (
    <>
      <Link className="flecha" href="/">
        🡰
      </Link>

      <div className="container-login">
        <div className="login-box">
          <h2 className="title">Login</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="Nombre"
            />
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Contraseña"
            />
            <button type="submit" className="button-submit">
              Iniciar Sesión
            </button>
          </form>
          {error && <p className="error-message">Error: {error}</p>}
        </div>
      </div>
    </>
  );
}
