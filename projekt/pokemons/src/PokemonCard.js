import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonCard({name, url}) {
    const [state, setState] = useState([]);
    const getCharacters = async () => {
      try {
        const result = await axios.get({url});
        setState(result.data.results);
        console.log(result);
      } catch (e) {
        console.error(e);
      }
    };
    useEffect(() => {
      getCharacters();
    }, []);

    
    return (
        <div>
           <div>{name}</div>
           <div>{}</div>
        </div>
    )
}

export default PokemonCard;