import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PokemonCard from "./PokemonCard";
import SearchPage from "./SearchPage";


function Pokemons() {
  const [state, setState] = useState([]);
  const getCharacters = async () => {
    try {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0`);
      setState(result.data.results);
      console.log(state);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);


  
  return (
    <>
      <div>
    <Card>
      <CardActionArea>
        <CardMedia
        />
        <CardContent>
          <Typography className="Pokemons" gutterBottom variant="h5" component="div">
          {state?.map((b) => {
            return <div className="card"><PokemonCard name={b.name[0].toUpperCase()+(b.name).substring(1)} url={b.url} /></div>;
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