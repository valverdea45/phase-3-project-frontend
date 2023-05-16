import React, { useState } from "react";
import Skill from "./Skill";
import AddSkill from "./AddSkill";

function PokemonCard({ singlePokemon }) {

    const [skillShowing, setSkillShowing] = useState(false)
    const [ addSkillShowing, setAddSkillShowing ] = useState(false)
    const [ pokemonSkills, setPokemonSkills ] = useState(singlePokemon.pokemon_skills)

    function handleClick() {
        setSkillShowing((skillShowing) => !skillShowing)
        setAddSkillShowing(false)
    }

    function handleNewSkillClick() {
        setAddSkillShowing((addSkillShowing) => !addSkillShowing)
        setSkillShowing(false)
    }

    const pokemonSkillsDisplayed = pokemonSkills.map((skill) => {
        return <Skill key={skill.id} skill={skill} />
    })

    function onAddSkill(newSkill) {
        setPokemonSkills([...pokemonSkills, newSkill])
    }

    return (
       <div>
        <h3>pokemon name: {singlePokemon.name}</h3>
        <p>pokemon level: {singlePokemon.level}</p>
        <img src={singlePokemon.sprite} alt="pokemon"/>
        <button onClick={handleClick}>Skills</button>
        <button onClick={handleNewSkillClick}>Add Skills</button>
        {skillShowing ? (
            pokemonSkillsDisplayed
        ) : null}
        {addSkillShowing ? (
            <AddSkill onAddSkill={onAddSkill} />
        ) : null}
        
       </div>
    )
}

export default PokemonCard