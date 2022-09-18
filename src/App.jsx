import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokecard from './components/Pokecard';
import axios from 'axios';
import { Grid } from './components/Grid/Grid';




function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, [])

  function getPokemons() {
    let endpoints = [];
    for (let i = 1; i <= 24; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
  }


  return (
    <div >
      <Navbar />
      <Grid>
        {pokemons.map((pokemon, key) => (
          <Pokecard name={pokemon.data.name} avatar={pokemon.data.name} key={key} types={pokemon.data.types} />
        ))}
      </Grid>
    </div>
  )
}

export default App;
