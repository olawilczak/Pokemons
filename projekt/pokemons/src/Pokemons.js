import React, {useState,useEffect} from 'react';
import axios from 'axios'
import { Card } from '@mui/material';


function Pokemons() {

        const [state, setState] = useState([])
        const getCharacters = async () => {
          try {
            const result = await axios.get('https://rickandmortyapi.com/api/character')
            setState(result)
          } catch(e) {
            console.error(e)
          }
        }
    
        useEffect(() => {
          getCharacters()
        }, []);
    
        const Name = () => {
          return (
            <div>{state.map((b)=>{
            return (<div>{b.name}</div> )
            })}</div>
          )
        }

    return (
        <>
<div>
<Card variant="outlined">
{Name}
</Card>
</div>
        </>
    )
}





export default Pokemons;