import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import SearchBar from './SearchBar.jsx';
import StatsDisplay from './StatsDisplay.jsx';
import Favorites from './Favorites.jsx';
import Navbar from './Navbar.jsx';
import History from './History.jsx';
import './index.css';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const root = createRoot(document.getElementById("root"));

const App = () => {

  const [currentPlayer, setCurrentPlayer] = useState(['']);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  const updateFavorites = (stat) => {
    if (favorites.length >= 3) {
      setFavorites([...favorites.slice(1), stat]);
    } else {
      setFavorites([...favorites, stat]);
    }
  };

  const updateHistory = (stat) => {
    if (history.length >= 6) {
      setHistory([...history.slice(1), stat])
    } else {
      setHistory([...history, stat])
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff00',
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
          <SearchBar setCurrentPlayer={setCurrentPlayer} updateHistory={updateHistory} />
        </Box>
        <Item >
          <StatsDisplay currentPlayer={currentPlayer} updateFavorites={updateFavorites} />
        </Item>
        <Item>
          <h1>Favorites</h1>
          <Favorites favorites={favorites} setCurrentPlayer={setCurrentPlayer} updateHistory={updateHistory}/>
        </Item>
        <Item>
          <h1>Recently Viewed</h1>
          <History history={history} />
        </Item>
      </Stack>
    </div>
  )
}

root.render(<App />);