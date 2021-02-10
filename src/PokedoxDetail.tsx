import { useState } from 'react';
import { suspensify, FetchPokemon } from './api';

let initialPokemon: any = suspensify(FetchPokemon(1));

export default function PokedoxDetail() {
  let [pokemonResource, setPokemonResource] = useState(initialPokemon);
  let pokemon = pokemonResource.read();

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <button
        type='button'
        onClick={() =>
          setPokemonResource(suspensify(FetchPokemon(pokemon.id + 1)))
        }
      >
        Next
      </button>
    </div>
  );
}
