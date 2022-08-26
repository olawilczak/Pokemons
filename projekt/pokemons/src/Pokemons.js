import React, {useState,useEffect} from 'react'
import axios from 'axios'

function Pokemons() {
    const [state, setState] = useState([])
    const getCharacters = async () => {
      try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setState(result)
      } catch(e) {
        console.error(e)
      }
    }

    useEffect(() => {
      getCharacters()
    }, []);

    const Pokemon = () => {
      return (
        <div>
            {state.map((a)=>(
          <> 
          <div>{a.name}</div>
          <div>{a.height}</div>
          <div>{a.base_experience}</div>
          <div>{a.weight}</div>
          <div>{a.ability}</div>
          </>
        ))}
        </div>
      )
    }

    return (
        <>
<div>{Pokemon}</div>
        </>
    )
}





export default Pokemons;