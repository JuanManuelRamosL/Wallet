"use client";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import "./signin.css"; // Importa el archivo CSS de estilos

export default function SignIn() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (error) {
      console.error("Authentication error:", error);
    }
  }, [error]);

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
            placeholder="Constraseña"
          />
          <button>Registrar</button>
        </form>
        {error && <p className="error-message">Error: {error}</p>}
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    </div>
  );
}
