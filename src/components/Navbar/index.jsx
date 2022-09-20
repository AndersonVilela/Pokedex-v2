import { Container, PokeLogo } from './style.js'
import SearchBar from '../SearchBar/search';


function Navbar({ filterPokemon }) {

  const PokeImage = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

  return (
    <Container>
      <PokeLogo src={PokeImage} alt="logo pokemon" />
      <SearchBar filterPokemon={filterPokemon} />
    </Container>
  )
}

export default Navbar;


