import React, { useState } from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import SearchBar from './SearchBar.jsx';
import StatsDisplay from './StatsDisplay.jsx';
import Favorites from './Favorites.jsx';
import Navbar from './Navbar.jsx';
import './index.css'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const App = () => {

  const [currentPlayer, setCurrentPlayer] = useState(['']);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  // const updatePlayer = (data) => {
  //   setCurrentPlayer(data);
  // };

  const updateFavorites = (stat) => {
    console.log('updated')
    if(favorites.length >= 3) {
      setFavorites([...favorites.slice(1), stat]);
    } else {
      setFavorites([...favorites, stat]);
    }
  };

  // const updateHistory = (stat) => {
  //   if (history.length >= 6) {
  //     setHistory([...history.slice(1), stat])
  //   } else {
  //     setHistory([...history, stat])
  //   }
  // };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff00',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className='app'>
        <Item>
          <Navbar />
        </Item>
      <Stack justifyContent="center"
        alignItems="center"
        spacing={1}>
        <Box sx={{ m: 1, b: 2 }}>
          <SearchBar setCurrentPlayer={setCurrentPlayer} />
        </Box>
        <Item >
          <StatsDisplay currentPlayer={currentPlayer} updateFavorites={updateFavorites} />
        </Item>
        <Item>
          <h1>Favorites</h1>
          <Favorites favorites={favorites} />
        </Item>
        <Item>
          <h1>Recently Viewed</h1>
            {/* <History /> */}
        </Item>
      </Stack>
    </div>

  )
}

root.render(<App />);