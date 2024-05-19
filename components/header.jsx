"use client";
import React, { useState } from "react";
import Card from "./card";
import { useStore } from "../store";

const Header = () => {
  const [crypto, setCrypto] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { data, setData, data2, setData2 } = useStore();
  // Función para manejar la búsqueda local
  const handleLocalSearch = () => {
    const result = data?.filter((item) =>
      item.name.toLowerCase().includes(crypto.toLowerCase())
    );
    setSearchResult(result);
  };

  // Función para manejar el cambio en el input
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

  // Función para manejar la selección de una sugerencia
  const handleSuggestionClick = (name) => {
    setCrypto(name);
    setSuggestions([]);
    handleLocalSearch();
  };

  // Función para manejar el enter key
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleLocalSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={crypto}
        onChange={handleInputChange}
        placeholder="Enter crypto name"
        onKeyDown={handleEnterPress}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.name)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleLocalSearch}>Local Search</button>
      {searchResult.length > 0 ? (
        searchResult.map((result) => (
          <Card key={result.id} searchResult={result} crypto={crypto} />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Header;
