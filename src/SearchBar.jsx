/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const SearchBar = (props) => {

  const [searchParams, setSearchParams] = useState({
    user: '',
    platform: ''
  });

  const handleSubmit = () => {
    event.preventDefault();
    axios.get('/search', {
      params: {
        'user': searchParams.user,
        'platform': searchParams.platform
      },
    }).then((response) => {
      props.updatePlayer(response);
    }).catch((err) => {
      console.log(err)
    })
  };

  const handleChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value
    })
  };

  // const platforms = [
  //   {'name': 'Origin', 'value': 'origin'},
  //   {'name': 'Xbox', 'value': 'xbln'},
  //   {'name': 'PSN', 'value': 'psn'}
  // ]

  return (
    console.log(searchParams),
    <form onSubmit={handleSubmit}>
      <label>
        Player Name (Origin ID, Xbox Live Gamertag, PSN ID):
        <Box>
          <TextField required id="filled-required" label="Player ID" varriant='filled' type='text' name='user' onChange={handleChange}></TextField>
        </Box>
      </label>
      <label>
        <FormControl required  sx={{ m: 1, minWidth: 120 }} >
          <InputLabel >Platform</InputLabel>
          <Select name='platform' id='platform' onChange={handleChange} displayEmpty>
            <MenuItem value={'origin'} >Origin</MenuItem>
            <MenuItem value={'xbl'} >Xbox</MenuItem>
            <MenuItem value={'psn'} >PSN</MenuItem>
          </Select>
        </FormControl>
      </label>
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar;