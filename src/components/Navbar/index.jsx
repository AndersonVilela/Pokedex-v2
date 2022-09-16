import { Container, PokeLogo } from './style.js'
import SearchBar from '../SearchBar/search';


function Navbar() {

  const PokeImage = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

  return (
    <Container>
      <PokeLogo src={PokeImage} alt="logo pokemon" />
      <SearchBar />
    </Container>
  )
}

export default Navbar;


