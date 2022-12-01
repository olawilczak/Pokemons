import React, { useState, useEffect } from "react";
import axios from "axios";

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
           <div>{name}</div>
           <div>{state.height}</div>
           <div>{state.weight}</div>
           <div>{state.base_experience}</div>
           <div>{state.abilities[0].ability.name}</div>
          <img src={state.sprites.other.dream_world.front_default}/>
        </div>
    )
}

export default PokemonCard;