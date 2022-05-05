/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';

const Favorites = (props) => {
  const data = props.favorites;

  const handleClick = (user, platform) => {
    event.preventDefault();
    let params = { 'user': user, 'platform': platform }
    axios.get('/search', { params })
      .then((response) => {
        props.setCurrentPlayer(response.data);
        props.updateHistory(response.data)
      })
      .catch((err) => {
        console.log('axios error', err)
      })
  }

  return (
    data.map((stat) => {
      let m = stat.metadata;
      return (
        <Card key={stat.attributes.id} height='250' style={{ display: 'inline-block' }} sx={{ m: 1 }} onClick={() => handleClick(stat.user, stat.platform)}>
          <div>{stat.user} | {m.name}</div>
          <img alt='legend' src={m.imageUrl} width="auto" height="200"></img>
          <div>lvl: {stat.level}</div>
        </Card>
      )
    })
  )
}

export default Favorites;