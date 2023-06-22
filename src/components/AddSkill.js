import React, { useState } from "react";

function AddSkill({ onAddSkill, pokemonId }) {

    const [name, setName] = useState("")
    const [powerPoints, setPowerPoints] = useState(0)
    const [description, setDescription] = useState("")
    const [isInvalidInput, setIsInvalidInput] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        
        if (name === "" || powerPoints === 0 || description === "") {
            setIsInvalidInput(true)
        } else {

            const objToBeSent = {
                name: name,
                description: description,
                power_points: powerPoints,
                pokemon_id: pokemonId
            }

            fetch("http://localhost:9292/skills", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(objToBeSent)
            })
                .then((data) => data.json())
                .then((newSkill) => {
                    onAddSkill(newSkill)
                })

            setName("")
            setPowerPoints(0)
            setDescription("")
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Name: </label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder={"Skill name"} />
                <label> Power Points: </label>
                <input onChange={(e) => setPowerPoints(e.target.value)} value={powerPoints} type="number" placeholder="Power Points" />
                <label> Description: </label>
                <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Description" />
                <button type="submit">Add Skill</button>
            </form>
            {isInvalidInput ? (
                <p>oops - please fill out all the fields.</p>
            ) : null}
        </div>
    )
}

export default AddSkill