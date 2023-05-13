import React, { useState } from "react";

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



    return (
       <div>
        <h3>pokemon name: {singlePokemon.name}</h3>
        <p>pokemon level: {singlePokemon.level}</p>
        <img src={singlePokemon.sprite} alt="pokemon"/>
        <button onClick={handleClick}>Skills</button>
        <button onClick={handleNewSkillClick}>Add Skills</button>
        {skillShowing ? (
            <p>lol</p>
        ) : null}
        {addSkillShowing ? (
            <p>lmao</p>
        ) : null}
        
       </div>
    )
}

export default PokemonCard