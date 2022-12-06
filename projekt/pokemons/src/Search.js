import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = ({setInputText, inputText}) => {


  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={inputText}
        onChange={(a) => setInputText(a.target.value)}
      />
    </div>
  );
};

export default Search;
