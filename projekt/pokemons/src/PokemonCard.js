import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";
import { FavoriteBorder, FavoriteIcon } from "@mui/icons-material";

function PokemonCard({ name, url }) {
  const [state, setState] = useState([]);
  const [favorites, setFavorites] = useState([]);


  const getCharacters = async () => {
    try {
      const result = await axios.get(url);
      setState(result.data);
      console.log(state);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  const toggleFavorite = () => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(favorite => favorite !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  if (!state) return null;
  return (
    <div>
      <img className="img" src={state?.sprites?.front_default} />
      <div className="card-card"></div>
      <div className="left"></div>
      <div className="name">{name}</div>
      <div className="height">{state?.height}</div>
      <div className="titles">Height</div>
      <div className="weight">{state?.weight}</div>
      <div className="titles">Weight</div>
      <div className="right"></div>
      <div className="experience">{state?.base_experience}</div>
      <div className="titles">Base experience</div>
      <div className="ability">
        {state?.abilities && state?.abilities[0]?.ability?.name}
      </div>
      <div className="titles">Ability</div>
      {favorites.includes(name) ? (
        <FavoriteIcon onClick={toggleFavorite} />
      ) : (
        <FavoriteBorder onClick={toggleFavorite} />
      )}
    </div>
  );
}

export default PokemonCard;
