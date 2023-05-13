import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ allPokemon }) {

    const displayedPokemon = allPokemon.map((singlePokemon) => <PokemonCard singlePokemon={singlePokemon} />)

    return (
        <div>
            {displayedPokemon}
        </div>
    )
}

export default PokemonList