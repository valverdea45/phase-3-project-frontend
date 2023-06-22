import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ allPokemon, onPokemonUpdate, handlePokemonDelete }) {



    const displayedPokemon = allPokemon.map((singlePokemon) => <PokemonCard key={singlePokemon.id} singlePokemon={singlePokemon} onPokemonUpdate={onPokemonUpdate} handlePokemonDelete={handlePokemonDelete}/>)

    return (
        <div>
            {displayedPokemon}
        </div>
    )
}

export default PokemonList