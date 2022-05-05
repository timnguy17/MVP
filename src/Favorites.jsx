/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Card from '@mui/material/Card';




const Favorites = (props) => {
  let data = props.favorites;
  console.log('favs', data)
  return (
    data.map((stat) => {
      let m = stat.metadata;
      return (
        <Card key={stat.attributes.id} height='250' style={{ display: 'inline-block' }} sx={{ m: 1 }}>
          <div>{stat.user} | {m.name}</div>
          <img alt='legend' src={m.imageUrl} width="auto" height="200"></img>
          <div>lvl: {stat.level}</div>
        </Card>
      )
    })
  )
}

export default Favorites;