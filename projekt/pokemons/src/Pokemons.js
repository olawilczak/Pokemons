import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Pokemons() {
  const [state, setState] = useState([]);
  const getCharacters = async () => {
    try {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setState(result.data.results);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);
  const Name = () => {
    return (
      <div>
        {state.map((b) => {
          return <div>{b.name}</div>;
        })}
      </div>
    );
  };
   const Height = () => {
     return (
       <div>
         {state.map((c) => {
           return <div>{c.height}</div>;
         })}
       </div>
     );
   };
   const Experience = () => {
     return (
       <div>
         {state.map((d) => {
           return <div>{d.base_experience}</div>;
         })}
       </div>
     );
   };
   const Weight = () => {
     return (
       <div>
         {state.data.results.map((e) => {
           return <div>{e.weight}</div>;
         })}
       </div>
     );
   };
   const Ability = () => {
     return (
       <div>
         {state.data.results.map((f) => {
           return <div>{f.abilities.ability.name}</div>;
         })}
       </div>
     );
   };
  return (
    <>
      <div>
    <Card>
      <CardActionArea>
        <CardMedia
    
        />
        <CardContent>
          <Typography className="Pokemons" gutterBottom variant="h5" component="div">
          {Name}
          {Height}
          {Weight}
          {Experience}
          {Ability}
          {state?.map((b) => {
            return <div className="card">{b.name[0].toUpperCase()+(b.name).substring(1)}</div>;
          })}
          {state?.map((c) => {
            return <div className="card-pokemons">{c.height}</div>;
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