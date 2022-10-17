import TextField from "@mui/material/TextField";
import { useState } from "react";

const Search = ()=>{

  const [change, setChange] = useState('')

  const changeWord = (event) => {
    setChange(event.target.value)
  }
    return (
        <div>
          <TextField id="outlined-basic" label="Search" variant="outlined"
          onChange={changeWord} />
        </div>
    )
};

export default Search;