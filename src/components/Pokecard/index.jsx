import { Container, PokeAvatar, PokeName, PokeType, SecLeft, SecRight, TypePoke } from "./style";
import React from "react";

import bug from '../../assets/pokemon-type-svg-icons/icons/bug.svg';
import normal from '../../assets/pokemon-type-svg-icons/icons/normal.svg';
import fire from '../../assets/pokemon-type-svg-icons/icons/fire.svg';
import water from '../../assets/pokemon-type-svg-icons/icons/water.svg';
import eletric from '../../assets/pokemon-type-svg-icons/icons/electric.svg';
import grass from '../../assets/pokemon-type-svg-icons/icons/grass.svg';
import ice from '../../assets/pokemon-type-svg-icons/icons/ice.svg';
import fighting from '../../assets/pokemon-type-svg-icons/icons/fighting.svg';
import poison from '../../assets/pokemon-type-svg-icons/icons/poison.svg';
import ground from '../../assets/pokemon-type-svg-icons/icons/ground.svg';
import flying from '../../assets/pokemon-type-svg-icons/icons/flying.svg';
import rock from '../../assets/pokemon-type-svg-icons/icons/rock.svg';
import ghost from '../../assets/pokemon-type-svg-icons/icons/ghost.svg';
import dragon from '../../assets/pokemon-type-svg-icons/icons/dragon.svg';
import dark from '../../assets/pokemon-type-svg-icons/icons/dark.svg';
import stell from '../../assets/pokemon-type-svg-icons/icons/steel.svg';
import fairy from '../../assets/pokemon-type-svg-icons/icons/fairy.svg';
import psychic from '../../assets/pokemon-type-svg-icons/icons/psychic.svg';

function Pokecard({ name, avatar, types }) {

  const setColor = (num) => {
    switch (types[num].type.name) {

      case 'bug':
        return <TypePoke src={bug} style={{ background: '#A6B91A' }} alt="type bug" />

      case 'dark':
        return <TypePoke src={dark} style={{ background: '#705746' }} alt="type dark" />

      case 'dragon':
        return <TypePoke src={dragon} style={{ background: '#6F35FC' }} alt="type dragon" />

      case 'eletric':
        return <TypePoke src={eletric} style={{ background: '#F7D02C' }} alt="type eletric" />

      case 'fairy':
        return <TypePoke src={fairy} style={{ background: '#D685AD' }} alt="type fairy" />
      case 'fighting':
        return <TypePoke src={fighting} style={{ background: '#C22E28' }} alt="type fighting" />

      case 'fire':
        return <TypePoke src={fire} style={{ background: '#EE8130' }} alt="type fire" />

      case 'flying':
        return <TypePoke src={flying} style={{ background: '#A98FF3' }} alt="type flying" />

      case 'ghost':
        return <TypePoke src={ghost} style={{ background: '#735797' }} alt="type ghost" />

      case 'grass':
        return <TypePoke src={grass} style={{ background: '#7AC74C' }} alt="tyype grass" />
      case 'ground':
        return <TypePoke src={ground} style={{ background: '#E2BF65' }} alt="type ground" />

      case 'ice':
        return <TypePoke src={ice} style={{ background: '#96D9D6' }} alt="type ice" />

      case 'normal':
        return <TypePoke src={normal} style={{ background: '#A8A77A' }} alt="type normal" />

      case 'poison':
        return <TypePoke src={poison} style={{ background: '#A33EA1' }} alt="type poison" />

      case 'psychic':
        return <TypePoke src={psychic} style={{ background: '#F95587' }} alt="type psychic" />
      case 'rock':
        return <TypePoke src={rock} style={{ background: '#B6A136' }} alt="type rock" />

      case 'stell':
        return <TypePoke src={stell} style={{ background: '#B7B7CE' }} alt="type stell" />

      case 'water':
        return <TypePoke src={water} style={{ background: '#6390F0' }} alt="type water" />

    }
  }

  const setType = () => {
    if (types[1]) {
      return (
        <>
          {setColor(0)}
          {setColor(1)}
        </>
      )
    }
    return setColor(0)
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
