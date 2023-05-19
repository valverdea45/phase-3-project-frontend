import React, { useState } from "react";

function Skill({ skill, onUpdatedSkill }) {

    const [onEditMode, setOnEditMode] = useState(false)
    const [name, setName] = useState(skill.name)
    const [description, setDescription] = useState(skill.description)
    const [powerPoints, setPowerPoints] = useState(skill.power_points)

    function handleClick() {
        setOnEditMode((onEditMode) => !onEditMode)
    }

    const objToBeSent = {
        name: name,
        description: description,
        power_points: powerPoints
    }

    function handleSubmit(e) {
        console.log("submitted")
        e.preventDefault()

        fetch(`http://localhost:9292/skills/${skill.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((data) => data.json())
        .then((updatedSkill) => onUpdatedSkill(updatedSkill))

        setOnEditMode(false)

        // setName("")
        // setDescription("")
        // setPowerPoints("")
    }

    function handleDeleteClick() {
        
    }

    return (
        <div>
            {onEditMode ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>Skill name: <input onChange={(e) => setName(e.target.value)} value={name} placeholder={name} type="text" /></p>
                        <p>Skill Description: <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder={description} /></p>
                        <p>Skill Power Points: <input onChange={(e) => setPowerPoints(e.target.value)} value={powerPoints} type="number" placeholder={powerPoints} /></p>
                        <button type="submit"> Save Changes </button>
                    </form>

                </div>
            ) :
                <div>
                    <p>Skill name: {skill.name}</p>
                    <p>Skill description: {skill.description}</p>
                    <p>Skill power points: {skill.power_points}</p>
                </div>}
            <button onClick={handleClick} >Edit Skill</button>
            <button onClick={handleDeleteClick}>Delete Skill</button>
        </div>
    )
}

export default Skill