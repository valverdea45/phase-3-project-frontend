import React, { useState } from "react";
import Skill from "./Skill";
import AddSkill from "./AddSkill";

function PokemonCard({ singlePokemon }) {

    const [skillShowing, setSkillShowing] = useState(false)
    const [addSkillShowing, setAddSkillShowing] = useState(false)
    const [pokemonSkills, setPokemonSkills] = useState(singlePokemon.pokemon_skills)
    const [noSkills, setNoSkills] = useState(false)

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

    const pokemonSkillsDisplayed = pokemonSkills.map((skill) => {
        return <Skill key={skill.id} skill={skill} onUpdatedSkill={onUpdatedSkill} />
    })

    function onAddSkill(newSkills) {
        setPokemonSkills(newSkills)
    }

    return (
        <div>
            <h3>pokemon name: {singlePokemon.name}</h3>
            <p>pokemon level: {singlePokemon.level}</p>
            <img src={singlePokemon.sprite} alt="pokemon" />
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
                <AddSkill onAddSkill={onAddSkill} pokemonId={singlePokemon.id}/>
            ) : null}

        </div>
    )
}

export default PokemonCard