"use client";
import React, { useState } from "react";
import Card from "./card";
import { useStore } from "../store";
import "./header.css";

const Header = () => {
  const [crypto, setCrypto] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { data, data2 } = useStore();
  const [selectedResult, setSelectedResult] = useState(null);

  const handleLocalSearch = (searchTerm = crypto) => {
    const result = data?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
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
    <header>
      {/* Header content */}
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
        {/* Suggestion list */}
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
        <button onClick={() => handleLocalSearch()} className="button-buscar">
          Buscar
        </button>

        {/* Conditional rendering of the search results */}
        {searchResult.length > 0 && searchResult.length < 2 ? (
          searchResult.map((result) => (
            <Card key={result.id} searchResult={result} crypto={crypto} />
          ))
        ) : (
          <p className="not-found"> No Hay Resultados</p>
        )}
      </div>

      {/* Other header content */}
    </header>
  );
};

export default Header;
