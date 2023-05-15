import React, { useState } from "react";
import Skill from "./Skill";
import AddSkill from "./AddSkill";

function PokemonCard({ singlePokemon, onAddSkill }) {

    const [skillShowing, setSkillShowing] = useState(false)
    const [ addSkillShowing, setAddSkillShowing ] = useState(false)

    function handleClick() {
        setSkillShowing((skillShowing) => !skillShowing)
        setAddSkillShowing(false)
    }

    function handleNewSkillClick() {
        setAddSkillShowing((addSkillShowing) => !addSkillShowing)
        setSkillShowing(false)
    }

    const pokemonSkillsDisplayed = singlePokemon.pokemon_skills.map((skill) => {
        return <Skill skill={skill} />
    })

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