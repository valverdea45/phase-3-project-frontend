import React from "react";
import Pokemon from "./Pokemon";

function PokemonList({ pokemon }) {

const displayedPokemons = pokemon.map((pokemon) => <Pokemon pokemon={pokemon}/>)

    return (
        displayedPokemons
    )
}

export default PokemonList