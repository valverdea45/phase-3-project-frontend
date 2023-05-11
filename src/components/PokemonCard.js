import React from "react";

function PokemonCard({ singlePokemon }) {
    return (
       <div>
        <h3>pokemon name: {singlePokemon.name}</h3>
        <p>pokemon level: {singlePokemon.level}</p>
        <img src={singlePokemon.sprite}/>
       </div>
    )
}

export default PokemonCard