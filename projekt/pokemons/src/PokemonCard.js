import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";


function PokemonCard({name, url}) {
    const [state, setState] = useState([]);
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
 
    if(!state) return null
    return (
      <div>
      <img className="img" src={state?.sprites?.front_default} />
      <div className="card-card"></div>
      <div className="left"></div>
      <div className="name">{name}</div>
      <div className="height">{state?.height}</div>
      <div>Height</div>
      <div className="weight">{state?.weight}</div>
      <div>Weight</div>
      <div className="right"></div>
      <div className="experience">{state?.base_experience}</div>
      <div>Base experience</div>
      <div className="ability">{state?.abilities && state?.abilities[0]?.ability?.name}</div>
      <div>Ability</div>
    </div>
    )
}

export default PokemonCard;