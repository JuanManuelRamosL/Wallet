"use client";

import React, { useState, useEffect } from "react";
import Card from "./card";
import { useStore } from "../store";
import "./header.css";

const Buscador = () => {
  const [crypto, setCrypto] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { data, data2 } = useStore();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Aquí puedes agregar cualquier lógica que necesites ejecutar cuando se monte el componente
  }, []); // Dependencias vacías para ejecutar solo una vez al montar

  const handleLocalSearch = (searchTerm = crypto) => {
    const result = data?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCrypto(value);

    if (value) {
      const filteredSuggestions = data2?.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setCrypto(name);
    setSuggestions([]);
    handleLocalSearch(name);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleLocalSearch();
    }
  };

  const handleFocus = (e) => {
    e.target.placeholder = "";
  };

  const handleBlur = (e) => {
    if (!crypto) {
      e.target.placeholder = "Buscar Cripto";
    }
  };

  return (
    /*   <header>
      <div className="container-buscador">
        <input
          type="text"
          value={crypto}
          onChange={handleInputChange}
          placeholder="Buscar Cripto"
          onKeyDown={handleEnterPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="buscador"
        />
        {suggestions.length > 0 && (
          <ul className="container-results-prev">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion.name)}
                className="li-results-prev"
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
        <div className="container-button-buscar">
          <button onClick={() => handleLocalSearch()} className="button-buscar">
            Buscar
          </button>
        </div>

        {searchResult.length > 0 && searchResult.length < 2 ? (
          searchResult.map((result) => (
            <Card key={result.id} searchResult={result} crypto={crypto} />
          ))
        ) : (
          <div className="container-sin-resultados">
            {count < 1 ? (
              <p className="not-found"> realiza una busqueda</p>
            ) : (
              <p className="not-found"> No Hay Resultados</p>
            )}
          </div>
        )}
      </div>
    </header> */
    <input
      type="text"
      value={crypto}
      onChange={handleInputChange}
      placeholder="Buscar Cripto"
      onKeyDown={handleEnterPress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="buscador"
    />
  );
};

export default Buscador;
