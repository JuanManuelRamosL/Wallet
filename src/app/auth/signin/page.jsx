"use client";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./signin.css"; // Importa el archivo CSS de estilos
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();
  const router = useRouter(); // Initialize useRouter

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
  const userAPI = "https://wallet-back.vercel.app/usersForm";
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const response = await axios.post(userAPI, {
        nombre: data.username,
        password: data.password,
        email: data.email,
        favs: "",
      });

      console.log("Usuario creado:", response.data);
      router.push("/");
      // Maneja la respuesta de éxito aquí (por ejemplo, redirigir al usuario o mostrar un mensaje)
    } catch (error) {
      console.error("Error:", error);
      // Maneja el error aquí (por ejemplo, mostrar un mensaje de error al usuario)
    }
  });

  return (
    <>
      <Link className="flecha" href="/">
        🡰
      </Link>
      <Link href="/login">
        <button className="buton-login">Login</button>
      </Link>
      <div className="container2">
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
            <button type="submit" className="button-submit">
              Registrarse
            </button>
          </form>
          {error && <p className="error-message">Error: {error}</p>}
          <div className="container-login-options">
            <button
              onClick={() => signIn("google")}
              className="button-options-login"
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="35"
                height="45"
                viewBox="0 0 48 48"
                aria-hidden="true"
                className="svg-google"
              >
                <path
                  fill="#4285F4"
                  d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                ></path>
                <path fill="none" d="M2 2h44v44H2z"></path>
              </svg>
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="button-options-login"
            >
              <svg
                height="45"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="35"
                data-view-component="true"
                class="octicon octicon-mark-github v-align-middle color-fg-default svg-github"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* 
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
 */
