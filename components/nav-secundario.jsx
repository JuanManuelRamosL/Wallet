"use client";
import React, { useState, useEffect } from "react";
import "./nav.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const NavSecundario = () => {
  const { error, isLoading, user } = useUser();
  const [scrolled, setScrolled] = useState(false);

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
    }
  };
  console.log(user);
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

        {/* Center: Navigation Links */}
        <div className="nav-center">
          <Link href="/" legacyBehavior>
            <a className="nav-link">Inicio</a>
          </Link>
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
          {user ? (
            <Link href="/usuario">
              <img
                src={user.picture}
                alt="User Profile"
                className="user-profile-picture"
              />
            </Link>
          ) : (
            <button className="login-button">
              {" "}
              <a href="/api/auth/login">Login</a>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavSecundario;
