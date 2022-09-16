import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokecard from './components/Pokecard';
import axios from 'axios';



function App() {

  const [pokemons, setPokemons] = useState('');
  const [listPokemons, setListPokemons] = useState([])
  for (let i = 1; i <= 10; i++) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((res) => setPokemons(res.data.name))
    listPokemons.push(pokemons)

  }

  console.log(listPokemons)

  return (
    <div >

      <Navbar />
      <Pokecard name='bulbasaur' />

    </div>
  )
}

export default App
