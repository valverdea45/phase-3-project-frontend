import React, { useState } from "react";
import Skill from "./Skill";
import AddSkill from "./AddSkill";

function PokemonCard({ singlePokemon, onPokemonUpdate, handlePokemonDelete }) {

    const [skillShowing, setSkillShowing] = useState(false)
    const [addSkillShowing, setAddSkillShowing] = useState(false)
    const [pokemonSkills, setPokemonSkills] = useState(singlePokemon.pokemon_skills)
    const [noSkills, setNoSkills] = useState(false)
    const [onEditMode, setOnEditMode] = useState(false)
    const [name, setName] = useState(singlePokemon.name)
    const [image, setImage] = useState(singlePokemon.sprite)
    const [level, setLevel] = useState(singlePokemon.level)

    function handleClick() {
        if (pokemonSkills.length === 0) {
            setNoSkills((noSkills) => !noSkills)
            setAddSkillShowing(false)
        } else {
            setSkillShowing((skillShowing) => !skillShowing)
            setAddSkillShowing(false)
        }
    }

    function handleNewSkillClick() {
        setAddSkillShowing((addSkillShowing) => !addSkillShowing)
        setSkillShowing(false)
        setNoSkills(false)
    }

    function onUpdatedSkill(updatedSkill) {
        const updatedSkills = pokemonSkills.map((skill) => {
            if (skill.id === updatedSkill.id) {
                return updatedSkill
            } else {
                return skill
            }
        })
        setPokemonSkills(updatedSkills)
    }

    function handleSkillDelete(deletedSkillId) {
        const newArrayOfSkills = pokemonSkills.filter((skill) => skill.id !== deletedSkillId)
        setPokemonSkills(newArrayOfSkills)
    }

    const pokemonSkillsDisplayed = pokemonSkills.map((skill) => {
        return <Skill key={skill.id} skill={skill} onUpdatedSkill={onUpdatedSkill} handleSkillDelete={handleSkillDelete} />
    })


    function onAddSkill(newSkill) {
        setPokemonSkills([...pokemonSkills, newSkill])
    }

    function handleEditClick() {
        setOnEditMode((onEditMode) => !onEditMode)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitted")
        const objToBeSent = {
            name: name,
            level: level,
            sprite: image
        }

        fetch(`http://localhost:9292/pokemons/${singlePokemon.id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((data) => data.json())
        .then((updatedPokemon) => onPokemonUpdate(updatedPokemon))

        setOnEditMode(false)
    }

    function handleReleaseClick() {
        fetch(`http://localhost:9292/pokemons/${singlePokemon.id}`, {
            method: "DELETE"
        })
        .then(handlePokemonDelete(singlePokemon.id))
    }

    return (
        <div>
            {onEditMode ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <h3>Name: <input onChange={(e) => setName(e.target.value)} value={name} placeholder={name} type="text" /></h3>
                        <p>Level: <input onChange={(e) => setLevel(e.target.value)} value={level} placeholder={level} type="number" /></p>
                        <p>Image: <input onChange={(e) => setImage(e.target.value)} value={image} placeholder="Image" type="text" /></p>
                        <button type="submit"> Save Changes </button>
                        <button onClick={handleEditClick}> Cancel </button>
                    </form>
                </div>
            ) :
                <div>
                    <h3>Name: {name}</h3>
                    <p>Level: {level}</p>
                    <button onClick={handleEditClick} >Edit Pokemon</button>
                    <img src={image} alt="pokemon" />
                </div>}
            <button onClick={handleReleaseClick}> Release Pokemon </button>
            <button onClick={handleClick}>Skills</button>
            <button onClick={handleNewSkillClick}>Add Skills</button>
            {skillShowing ? (
                pokemonSkillsDisplayed
            ) : null}
            {noSkills ? (
                <div>
                    <p>This pokemon has no skills</p>
                    <p>Try adding some!</p>
                </div>
            ) : null}
            {addSkillShowing ? (
                <AddSkill onAddSkill={onAddSkill} pokemonId={singlePokemon.id} />
            ) : null}

        </div>
    )
}

export default PokemonCard