import React, { useState } from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import SearchBar from './SearchBar.jsx';
import StatsDisplay from './StatsDisplay.jsx';
import Favorites from './Favorites.jsx';
import './index.css'


const App = () => {

  const [player, setPlayer] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const updatePlayer = (data) => {
    setPlayer(data);
  }



  return (
    <div>

      <h1> Apex Stat Tracker</h1>
      <SearchBar updatePlayer={updatePlayer} />

      <StatsDisplay player={player} />

      <Favorites favorites={favorites}/>
    </div>

  )
}

root.render(<App />);