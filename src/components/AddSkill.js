import React, { useState } from "react";

function AddSkill({ onAddSkill }) {

    const [name, setName] = useState("")
    const [powerPoints, setPowerPoints] = useState(0)
    const [description, setDescription] = useState("")

    function handleSubmit(e) {
        console.log("submitted")
        e.preventDefault()
        const objToBeSent = {
            name: name,
            description: description,
            power_points: powerPoints
        }

        fetch("http://localhost:9292/skills", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((data) => data.json())
        .then((newSkill) => onAddSkill(newSkill))
    }

    return (
        <div>
            <p>you can add skills here!</p>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder={"Skill name"}/>
                <input onChange={(e) => setPowerPoints(e.target.value)} value={powerPoints} type="number" placeholder="Power Points"/>
                <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Description"/>
                <button type="submit">Add Skill</button>
            </form>
        </div>
    )
}

export default AddSkill