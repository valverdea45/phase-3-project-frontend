import React, { useState } from "react";

function Skill({ skill, onUpdatedSkill, handleSkillDelete }) {

    const [onEditMode, setOnEditMode] = useState(false)
    const [name, setName] = useState(skill.name)
    const [description, setDescription] = useState(skill.description)
    const [powerPoints, setPowerPoints] = useState(skill.power_points)

    function handleClick() {
        setOnEditMode((onEditMode) => !onEditMode)
    }

    function handleSubmit(e) {
        console.log("submitted")
        e.preventDefault()

        const objToBeSent = {
            name: name,
            description: description,
            power_points: powerPoints
        }

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

    // dont need to wait for json response already have skill id

    function handleDeleteClick() {
        fetch(`http://localhost:9292/skills/${skill.id}`, {
            method: "DELETE"
        })
        .then(handleSkillDelete(skill.id))
    }

    // placeholders only are used when inputs value is empty

    return (
        <div>
            {onEditMode ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>Name: <input onChange={(e) => setName(e.target.value)} value={name} placeholder={name} type="text" /></p>
                        <p>Description: <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder={description} /></p>
                        <p>Power Points: <input onChange={(e) => setPowerPoints(e.target.value)} value={powerPoints} type="number" placeholder={powerPoints} /></p>
                        <button type="submit"> Save Changes </button>
                    </form>

                </div>
            ) :
                <div>
                    <p>Name: {skill.name}</p>
                    <p>Description: {skill.description}</p>
                    <p>Power Points: {skill.power_points}</p>
                </div>}
            <button onClick={handleClick} >Edit Skill</button>
            <button onClick={handleDeleteClick}>Delete Skill</button>
        </div>
    )
}

export default Skill