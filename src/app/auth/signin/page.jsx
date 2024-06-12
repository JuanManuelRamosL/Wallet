"use client";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./signin.css"; // Importa el archivo CSS de estilos

export default function SignIn() {
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const errorParam = urlParams.get("error");
      if (errorParam) {
        console.error("Authentication error:", errorParam);
        setError(errorParam);
      }
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="container">
      <div className="signin-box">
        <h2 className="title">Sign In</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Nombre"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
          />
          <button type="submit">Registrar</button>
        </form>
        {error && <p className="error-message">Error: {error}</p>}
        <button onClick={() => signIn("google")}>Sign in with Google</button>
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      </div>
    </div>
  );
}
