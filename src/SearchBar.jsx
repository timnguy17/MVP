/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const SearchBar = (props) => {
  const [searchParams, setSearchParams] = useState({
    user: '',
    platform: ''
  });

  const handleSubmit = () => {
    event.preventDefault();
    let params = { 'user': searchParams.user, 'platform': searchParams.platform }
    axios.get('/search', { params })
      .then((response) => {
        console.log('success axios', response)
        props.setCurrentPlayer(response.data)
      })
      .catch((err) => {
        console.log('axios error', err)
      })
    //why doesnt this work?
    // fetch('/search', { params }).then((response) => {
    //   console.log('success fetch')
    //   return response.json();
    // }).then((data) => {
    //   console.log(data)
    // }).catch((err) => {
    //   console.log('fetch error', err)
    // })
  }

  const handleChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value
    })
  };

  return (
    console.log(searchParams),
    <form onSubmit={handleSubmit}>
      <Stack direction='row' spacing={2} sx={{ width: 'fit-content' }}>
        <Box >
          <TextField required id="outlined-basic" label="Apex Legends ID" variant='outlined' type='text' name='user' onChange={handleChange}></TextField>
        </Box>
        <FormControl required sx={{ m: 1, minWidth: 120 }} >
          <InputLabel >Platform</InputLabel>
          <Select name='platform' id='platform' onChange={handleChange} displayEmpty defaultValue=''>
            <MenuItem value={'origin'} >Origin</MenuItem>
            <MenuItem value={'xbl'} >Xbox</MenuItem>
            <MenuItem value={'psn'} >PSN</MenuItem>
          </Select>
        </FormControl>
        <Button type='submit'>Search</Button>
      </Stack>
    </form>
  )
}

export default SearchBar;