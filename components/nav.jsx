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
  console.log(user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="nav-header">
      <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        {/* Left: App Logo */}
        <div className="nav-left">
          <img
            src="./img-user/app-logo.png"
            alt="App Logo"
            className="app-logo"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40" fill="white">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>

        <div className="container-title-app-mobile">
          <h1 className="app-title">Wallet App</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className={`nav-center ${menuOpen ? "open" : ""}`}>
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

        {/* Right: User Profile or Login Button */}
        <div className="nav-right">
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
              {/* <a href="/api/auth/login">Login</a> */}
            </button>
          )}
          <button className="login-button" onClick={() => signIn()}>
            Loguin
            {/* <a href="/api/auth/login">Login</a> */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
