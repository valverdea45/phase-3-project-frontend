import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ allPokemon, onAddSkill }) {

    const displayedPokemon = allPokemon.map((singlePokemon) => <PokemonCard singlePokemon={singlePokemon} onAddSkill={onAddSkill} />)

    return (
        <div>
            {displayedPokemon}
        </div>
    )
}

export default PokemonList