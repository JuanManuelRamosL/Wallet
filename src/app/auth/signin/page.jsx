"use client";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
// Asegúrate de tener un componente de botón estilizado
import "./signin.css"; // Importa el archivo CSS de estilos

export default function SignIn() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error) {
      console.error("Authentication error:", error);
    }
  }, [error]);

  return (
    <div className="container">
      <div className="signin-box">
        <h2 className="title">Sign In</h2>
        {error && <p className="error-message">Error: {error}</p>}
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    </div>
  );
}
