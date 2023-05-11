import React, { useEffect, useState } from "react";

function AddPokemon() {

    const [pokemonName, setPokemonName] = useState("")
    const [pokemonLevel, setPokemonLevel] = useState(0)
    const [pokemonImage, setPokemonImage] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        
        const objToBeSent = {
            name: pokemonName,
            level: pokemonLevel,
            sprite: pokemonImage
        }

        fetch("http://localhost:9292/pokemons", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((data) => data.json())
        .then((newPokemon) => console.log(newPokemon))

        setPokemonName("")
        setPokemonLevel(0)
        setPokemonImage("")
    }

    

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