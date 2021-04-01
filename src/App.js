import './App.css';
import { useState, useEffect } from "react";

import Grid from "./components/Grid";

const initialState = {
  x_dimension:"3",
  y_dimension:"3",
  terrain:"mountains"
}

function App() {
  const [mapData, setMapData] = useState(initialState)

  const handleChange = e => {
    const {value, name} = e.target

    setMapData({
      ...mapData,
      [name]:value
    })

  } 
  return (
    <div className="App">
      <header className="App-header">
       <h1>Map Test</h1>
       <div className="selectors">
        <label htmlFor="x_dimension">X Dimension: </label>

          <select onChange={handleChange} name="x_dimension" id="x_dimension">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>    

        <label htmlFor="y_dimension">Y Dimension: </label>

          <select onChange={handleChange} name="y_dimension" id="y_dimension">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>     

        <label htmlFor="terrain">Choose a Terrain: </label>

          <select onChange={handleChange} name="terrain" id="terrain">
            <option value="mountains">mountains</option>
            <option value="coast">coast</option>
            <option value="grasslands">grasslands</option>
            <option value="forest">forest</option>
            <option value="dungeon">dungeon</option>
          </select>     
       </div>
 </header>

    <Grid mapData={mapData}/>

    <footer>
      <h3>Map</h3>
    </footer>

    </div>
  );
}

export default App;
