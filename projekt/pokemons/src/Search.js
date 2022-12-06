import { TextField } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";


const Search = () => {

  const [state, setState] = useState([]);
  const [pokemons, setPokemons] = useState("")
  const [query, setQuery] = useState("");


  const getCharacters = async () => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemons}`
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

  const filteredPokemons = useMemo(()=> {
    return state?.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    },[state, query])
  })


  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={query}
        onChange={(a) => setQuery(a.target.value)}
      />
      <div>
        {filteredPokemons?.map(item => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Search;
