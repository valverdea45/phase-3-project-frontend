import React, { useState } from "react";
import Skill from "./Skill";

function PokemonCard({ singlePokemon }) {

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
            <div>
               <p>you can add skills here!</p> 
            </div>
        ) : null}
        
       </div>
    )
}

export default PokemonCard