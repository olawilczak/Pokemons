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
      <img src={state?.sprites?.front_default} />
      <div>{name}</div>
      <div>{state?.height}</div>
      <div>{state?.weight}</div>
      <div>{state?.base_experience}</div>
      <div>{state?.abilities && state?.abilities[0]?.ability?.name}</div>
    </div>
    )
}

export default PokemonCard;