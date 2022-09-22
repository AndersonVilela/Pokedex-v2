import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokecard from './components/Pokecard';
import axios from 'axios';
import { Grid } from './components/Grid/Grid';




function App() {

  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = React.useState(20);

  useEffect(() => {
    getPokemons();
    console.log(currentPage)
  }, [currentPage])

  function getPokemons() {
    let endpoints = [];
    for (let i = 1; i <= currentPage; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
  }

  function filterPokemon(name) {
    let pokemonFiltered = [];
    if (name === "") {
      getPokemons();
    }
    for (let i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        pokemonFiltered.push(pokemons[i])
      }
    }
    setPokemons(pokemonFiltered)
  }

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 20)
      }
    });

    intersectionObserver.observe(document.querySelector('#sentinela'));

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div >
      <Navbar filterPokemon={filterPokemon} />
      <Grid>
        {pokemons.map((pokemon, key) => (
          <Pokecard name={pokemon.data.name} avatar={pokemon.data.name} key={key} types={pokemon.data.types} />
        ))}
      </Grid>
      <div id="sentinela"></div>
    </div>
  )
}

export default App;
