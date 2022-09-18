import { Container, PokeAvatar, PokeName, PokeType, SecLeft, SecRight, TypePoke } from "./style";
import React from "react";


function Pokecard({ name, avatar, types }) {

  const setType = () => {
    if (types[1]) {
      return (
        <>
          <TypePoke>{types[0].type.name}</TypePoke>
          <TypePoke>{types[1].type.name}</TypePoke>
        </>
      )
    }
    return <TypePoke>{types[0].type.name}</TypePoke>
  }

  return (
    <Container  >
      <SecLeft>
        <PokeName>{name}</PokeName>
        <PokeType>
          {setType()}
        </PokeType>
      </SecLeft>

      <SecRight>
        <PokeAvatar src={`http://www.pkparaiso.com/imagenes/xy/sprites/animados/${avatar}.gif`} alt="Gif do pokemon" />
      </SecRight>
    </Container>
  )
}

export default Pokecard;
