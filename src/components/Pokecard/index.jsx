import { Container, PokeAvatar, PokeName, PokeType, SecLeft, SecRight, TypePoke } from "./style";
import React from "react";


function Pokecard({ name, avatar, types }) {

  const setColor1 = (num) => {
    switch (types[num].type.name) {

      case 'bug':
        return <TypePoke style={{ background: '#A6B91A' }}>{types[0].type.name}</TypePoke>

      case 'dark':
        return <TypePoke style={{ background: '#705746' }}>{types[0].type.name}</TypePoke>

      case 'dragon':
        return <TypePoke style={{ background: '#6F35FC' }}>{types[0].type.name}</TypePoke>

      case 'eletric':
        return <TypePoke style={{ background: '#F7D02C' }}>{types[0].type.name}</TypePoke>

      case 'fairy':
        return <TypePoke style={{ background: '#D685AD' }}>{types[0].type.name}</TypePoke>
      case 'fighting':
        return <TypePoke style={{ background: '#C22E28' }}>{types[0].type.name}</TypePoke>

      case 'fire':
        return <TypePoke style={{ background: '#EE8130' }}>{types[0].type.name}</TypePoke>

      case 'flying':
        return <TypePoke style={{ background: '#A98FF3' }}>{types[0].type.name}</TypePoke>

      case 'ghost':
        return <TypePoke style={{ background: '#735797' }}>{types[0].type.name}</TypePoke>

      case 'grass':
        return <TypePoke style={{ background: '#7AC74C' }}>{types[0].type.name}</TypePoke>
      case 'ground':
        return <TypePoke style={{ background: '#E2BF65' }}>{types[0].type.name}</TypePoke>

      case 'ice':
        return <TypePoke style={{ background: '#96D9D6' }}>{types[0].type.name}</TypePoke>

      case 'normal':
        return <TypePoke style={{ background: '#A8A77A' }}>{types[0].type.name}</TypePoke>

      case 'poison':
        return <TypePoke style={{ background: '#A33EA1' }}>{types[0].type.name}</TypePoke>

      case 'psychic':
        return <TypePoke style={{ background: '#F95587' }}>{types[0].type.name}</TypePoke>
      case 'rock':
        return <TypePoke style={{ background: '#B6A136' }}>{types[0].type.name}</TypePoke>

      case 'stell':
        return <TypePoke style={{ background: '#B7B7CE' }}>{types[0].type.name}</TypePoke>

      case 'water':
        return <TypePoke style={{ background: '#6390F0' }}>{types[0].type.name}</TypePoke>

    }
  }
  const setColor2 = (num) => {
    switch (types[num].type.name) {

      case 'bug':
        return <TypePoke style={{ background: '#A6B91A' }}>{types[1].type.name}</TypePoke>

      case 'dark':
        return <TypePoke style={{ background: '#705746' }}>{types[1].type.name}</TypePoke>

      case 'dragon':
        return <TypePoke style={{ background: '#6F35FC' }}>{types[1].type.name}</TypePoke>

      case 'eletric':
        return <TypePoke style={{ background: '#F7D02C' }}>{types[1].type.name}</TypePoke>

      case 'fairy':
        return <TypePoke style={{ background: '#D685AD' }}>{types[1].type.name}</TypePoke>
      case 'fighting':
        return <TypePoke style={{ background: '#C22E28' }}>{types[1].type.name}</TypePoke>

      case 'fire':
        return <TypePoke style={{ background: '#EE8130' }}>{types[1].type.name}</TypePoke>

      case 'flying':
        return <TypePoke style={{ background: '#A98FF3' }}>{types[1].type.name}</TypePoke>

      case 'ghost':
        return <TypePoke style={{ background: '#735797' }}>{types[1].type.name}</TypePoke>

      case 'grass':
        return <TypePoke style={{ background: '#7AC74C' }}>{types[1].type.name}</TypePoke>
      case 'ground':
        return <TypePoke style={{ background: '#E2BF65' }}>{types[1].type.name}</TypePoke>

      case 'ice':
        return <TypePoke style={{ background: '#96D9D6' }}>{types[1].type.name}</TypePoke>

      case 'normal':
        return <TypePoke style={{ background: '#A8A77A' }}>{types[1].type.name}</TypePoke>

      case 'poison':
        return <TypePoke style={{ background: '#A33EA1' }}>{types[1].type.name}</TypePoke>

      case 'psychic':
        return <TypePoke style={{ background: '#F95587' }}>{types[1].type.name}</TypePoke>
      case 'rock':
        return <TypePoke style={{ background: '#B6A136' }}>{types[1].type.name}</TypePoke>

      case 'stell':
        return <TypePoke style={{ background: '#B7B7CE' }}>{types[1].type.name}</TypePoke>

      case 'water':
        return <TypePoke style={{ background: '#6390F0' }}>{types[1].type.name}</TypePoke>

    }
  }


  const setType = () => {
    if (types[1]) {
      return (
        <>
          {setColor1(0)}
          {setColor2(1)}
        </>
      )
    }
    return setColor1(0)
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
