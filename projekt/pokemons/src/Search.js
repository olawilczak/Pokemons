import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Fuse from "fuse.js";
import "../node_modules/bulma/css/bulma.min.css";
import classnames from "classnames";
import SearchPage from "./SearchPage";

const Search = () => {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState("");
  const [pokemonName, setPokemonName] = useState([]);
  const [selected, setSelected] = useState(0);
  const [picked, setPicked] = useState(null);
  const [resultList, setResultList] = useState([]);

  const options = {
    keys: ["name", "code"],
  };

  const getCharacters = async () => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
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
    const fuse = new Fuse(state, options);

    setPokemonName(fuse.search(query).slice(0, 6));
  }, [query]);

  if (picked !== null) {
    const currentState = resultList[picked];
    return <SearchPage name={currentState} onBack={() => setPicked(null)} />;
  }

  const onKeyUp = (event) => {
    const { key } = event;

    if (key === "ArrowUp") {
      const newSelected = selected - 1;

      if (newSelected < 0) {
        return;
      }
      setSelected(newSelected);
    }

    if (key === "ArrowDown") {
      const newSelected = selected + 1;

      if (newSelected > resultList.length - 1) {
        return;
      }

      setSelected(newSelected);
    }

    if (key === "Enter") {
      setPicked(selected);
    }
  };

  console.log(resultList);

  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          onKeyUp={onKeyUp}
        />
      </div>
      {resultList.length > 0 && (
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {resultList.map(({ name, code }, index) => {
              return (
                <a
                  key={code}
                  className={classnames("dropdown-item", {
                    "is-active": selected === index,
                  })}
                  onMouseEnter={() => setSelected(index)}
                >
                  {name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
