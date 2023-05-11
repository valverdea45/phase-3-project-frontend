import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {

    const [allPokemon, setAllPokemon] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/pokemons")
            .then((data) => data.json())
            .then((data) => setAllPokemon(data))
    }, [])

    console.log("pokemon list component", allPokemon)

    const displayedPokemon = allPokemon.map((singlePokemon) => <PokemonCard singlePokemon={singlePokemon} />)

   

    return (
        <div>
            {displayedPokemon}
        </div>
    )
}

export default PokemonList