import React, { useEffect, useState } from "react";

function AddPokemon() {

    

    return (
        <div>
            <header>Add a Pokemon to your PC!</header>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setPokemonName(e.target.value)} value={pokemonName} type="text" placeholder="pokemon name"/>
                <input onChange={(e) => setPokemonLevel(e.target.value)} value={pokemonLevel} type="number" placeholder="pokemon level"/>
                <input onChange={(e) => setPokemonImage(e.target.value)} value={pokemonImage} type="text" placeholder="pokemon image"/>
                <button type="submit">Add Pokemon</button>
            </form>
        </div>
    )
}

export default AddPokemon