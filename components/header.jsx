"use client";
import React, { useState } from "react";
import Card from "./card";
import { useStore } from "../store";
import "./header.css";

const Header = () => {
  const [crypto, setCrypto] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { data, setData, data2, setData2 } = useStore();
  const [selectedResult, setSelectedResult] = useState(null);

  // Handle local search
  const handleLocalSearch = () => {
    const result = data?.filter((item) =>
      item.name.toLowerCase().includes(crypto.toLowerCase())
    );
    setSearchResult(result);
  };

  // Handle input change
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

  // Handle suggestion click
  const handleSuggestionClick = (name) => {
    setCrypto(name);
    setSelectedResult(name);
    setSuggestions([]);
    handleLocalSearch();
  };

  // Handle enter key press
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleLocalSearch();
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
        <button onClick={handleLocalSearch} className="button-buscar">
          Buscar
        </button>

        {/* Conditional rendering of search results */}
        {searchResult.length > 0 && selectedResult && (
          // Render only the first search result (assuming you want the top match)
          <Card key={searchResult[0].id} searchResult={searchResult[0]} crypto={crypto} />
        )}
      </div>

      {/* Other header content */}
    </header>
  );
};

export default Header;
