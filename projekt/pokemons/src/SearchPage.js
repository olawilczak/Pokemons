import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";

const SearchPage = ({ inputText }) => {
  const [state, setState] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const getCharacters = async () => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0`
      );
      setState(result.data.results);
      console.log(state);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    if (state) {
      const filters = state.filter((b) =>
        b.name.includes(inputText).toLowerCase()
      );
      setPokemons(filters);
    }
  }, [inputText.length]);

  return 

};

export default SearchPage;
