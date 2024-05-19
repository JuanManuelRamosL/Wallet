"use client";
import React, { useState } from "react";
import "./nav.css";
import Link from "next/link";

const Nav = ({ isLoggedIn, userProfilePicture }) => {
  return (
    <header className="nav-header">
      <div className="nav-container">
        {/* Left: App Logo */}
        <div className="nav-left">
          <img
            src="./img-user/Captura de pantalla 2024-05-19 204356.png"
            alt="App Logo"
            className="app-logo"
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="nav-center">
          <a className="nav-link">Sobre Nosotros</a>

          <a className="nav-link">Cryptos</a>

          <a className="nav-link">Exchanges</a>
        </div>

        {/* Right: User Profile or Login Button */}
        <div className="nav-right">
          {isLoggedIn ? (
            <img
              src={userProfilePicture}
              alt="User Profile"
              className="user-profile-picture"
            />
          ) : (
            <button className="login-button">Login</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
