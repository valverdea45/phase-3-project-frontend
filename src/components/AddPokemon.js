import React, { useState } from "react";

function AddPokemon({ onAddPokemon }) {

    const [pokemonName, setPokemonName] = useState("")
    const [pokemonLevel, setPokemonLevel] = useState(0)
    const [pokemonImage, setPokemonImage] = useState("")
    const [ invalidInput, setInvalidInput ] = useState(false)
    

    function handleSubmit(e) {
        e.preventDefault()

        if (pokemonName === "" || pokemonLevel === 0 || pokemonImage === "") {
            setInvalidInput(true)
        } else {
            const objToBeSent = {
                name: pokemonName,
                level: pokemonLevel,
                sprite: pokemonImage
            }

            fetch("http://localhost:9292/pokemons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(objToBeSent)
            })
                .then((data) => data.json())
                .then((newPokemon) => onAddPokemon(newPokemon))

            setPokemonName("")
            setPokemonLevel(0)
            setPokemonImage("")
            setInvalidInput(false)
        }
    }

    

    return (
        <div>
            <header>Add a Pokemon to your PC!</header>
            <form onSubmit={handleSubmit}>
                <label> Name: </label>
                <input onChange={(e) => setPokemonName(e.target.value)} title="Name" value={pokemonName} type="text" placeholder="pokemon name" />
                <label> Level: </label>
                <input onChange={(e) => setPokemonLevel(e.target.value)} value={pokemonLevel} type="number" placeholder="pokemon level" />
                <label> Image: </label>
                <input onChange={(e) => setPokemonImage(e.target.value)} value={pokemonImage} type="text" placeholder="pokemon image" />
                <button type="submit">Add Pokemon</button>
            </form>
            {invalidInput ? (
                <p>oops - please fill out all the fields above.</p>
            ) : null}
        </div>
    )
}

export default AddPokemon