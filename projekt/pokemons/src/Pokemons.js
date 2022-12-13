import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PokemonCard from "./PokemonCard";
import { TextField } from "@mui/material";
import "./Pokemons.css";


function Pokemons() {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState("");
  const [newPokemons, setNewPokemons] = useState([]);

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

  console.log(state)

  useEffect(() => {
    if (state) {
      const filteredPokemons = state?.filter((item) =>
        item.name.includes(query.toLowerCase())
      );
      setNewPokemons(filteredPokemons);
    }
  }, [query.length]);

  console.log(newPokemons)

  return (
    <>
      <div className="search">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={query}
          onChange={(a) => setQuery(a.target.value)}
        />
      </div>
      <div>
        <Card>
          <CardActionArea>
            <CardMedia/>
            <CardContent sx={{padding:0}}>
              <Typography
                className="Pokemons"
                gutterBottom
                variant="h5"
                component="div"
              >
                {query.length > 0 ? newPokemons?.map((b) => {
                  return (
                    <div className="card">
                      <PokemonCard
                        name={b.name[0].toUpperCase() + b.name.substring(1)}
                        url={b.url}
                      />
                    </div>
                  )
                }) : state?.map((b) => {
                  return (
                    <div className="card">
                      <PokemonCard
                        name={b.name[0].toUpperCase() + b.name.substring(1)}
                        url={b.url}
                      />
                    </div>
                  )
                })}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
export default Pokemons;
