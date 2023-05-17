import React, { useState } from "react";

function AddPokemon({ onAddPokemon }) {

    const [pokemonName, setPokemonName] = useState("")
    const [pokemonLevel, setPokemonLevel] = useState(0)
    const [pokemonImage, setPokemonImage] = useState("")
    // const [skillName, setSkillName] = useState("")
    // const [powerPoints, setPowerPoints] = useState(0)
    // const [description, setDescription] = useState("")
    // const [invalidInput, setInvalidInput] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        // if (pokemonName === "" || pokemonLevel === 0 || pokemonImage === "" || skillName === "" || powerPoints === 0) {
        //     setInvalidInput(true)
        // }

        // setInvalidInput(false)

        // const objToBeSent = {
        //     name: pokemonName,
        //     level: pokemonLevel,
        //     sprite: pokemonImage,
        //     skill_name: skillName,
        //     description: description,
        //     power_points: powerPoints
        // }

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
        .then((newPokemon) => onAddPokemon(newPokemon))

        setPokemonName("")
        setPokemonLevel(0)
        setPokemonImage("")
        // setDescription("")
        // setPowerPoints(0)
        // setSkillName("")
    }

    

    return (
        <div>
            <header>Add a Pokemon to your PC!</header>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setPokemonName(e.target.value)} value={pokemonName} type="text" placeholder="pokemon name"/>
                <input onChange={(e) => setPokemonLevel(e.target.value)} value={pokemonLevel} type="number" placeholder="pokemon level"/>
                <input onChange={(e) => setPokemonImage(e.target.value)} value={pokemonImage} type="text" placeholder="pokemon image"/>
                {/* <input onChange={(e) => setSkillName(e.target.value)} value={skillName} type="text" placeholder="Skill Name"/>
                <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Skill Description"/>
                <input onChange={(e) => setPowerPoints(e.target.value)} value={powerPoints} type="number" placeholder="Skill Power Points"/> */}
                <button type="submit">Add Pokemon</button>
                {/* {invalidInput ? (
                    <p>Oops - don't forget to fill out all the fields above</p>
                ) : null} */}
            </form>
        </div>
    )
}

export default AddPokemon