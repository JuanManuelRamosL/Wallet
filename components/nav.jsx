"use client";
import React, { useState, useEffect } from "react";
import "./nav.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { signIn, useSession } from "next-auth/react";

const Nav = () => {
  const { error, isLoading, user } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container-left">
          <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            fill="white"
            className="svg-button-menu"
            onClick={toggleMenu}
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>

          <img
            src="./img-user/app-logo.png"
            alt="App Logo"
            className="app-logo"
          />
        </div>

        <div className="container-title">
          <h1 className="app-title">Wallet App</h1>
        </div>

        <div className="container-right">
          {session ? (
            <Link href="/usuario">
              <img
                src={session.user.image}
                alt="User Profile"
                className="user-profile-picture"
              />
            </Link>
          ) : (
            <button className="login-button" onClick={() => signIn()}>
              Loguin
            </button>
          )}
        </div>
      </nav>

      <div className={`nav-container ${menuOpen ? "open" : ""}`}>
        <div className="nav-center">
          <Link href="/" legacyBehavior>
            <a className="nav-link">Inicio</a>
          </Link>
          <a
            href="#cryptos"
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, "cryptos")}
          >
            Cryptos
          </a>
          <a
            href="#exchange"
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, "exchange")}
          >
            Exchanges
          </a>
          <Link href="/favs" legacyBehavior>
            <a className="nav-link">Favoritos</a>
          </Link>
          <a
            href="#sobre-nosotros"
            className="nav-link"
            onClick={(e) => handleSmoothScroll(e, "sobre-nosotros")}
          >
            Sobre Nosotros
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
