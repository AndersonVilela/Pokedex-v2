import { Container, PokeAvatar, PokeName, PokeType, SecLeft, SecRight, TypePoke } from "./style";


function Pokecard({ name }) {

  return (
    <Container  >
      <SecLeft>
        <PokeName>{name}</PokeName>
        <PokeType>
          <TypePoke>Tipo 1</TypePoke>
          <TypePoke>Tipo 2</TypePoke>
        </PokeType>
      </SecLeft>

      <SecRight>
        <PokeAvatar src="https://www.pkparaiso.com/xy/sprites/animados/bulbasaur.gif" alt="Gif do pokemon" />
      </SecRight>
    </Container>
  )
}

export default Pokecard;
