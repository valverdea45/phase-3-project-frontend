import React, { useState } from "react";

function AddSkill() {

    const [name, setName] = useState("")
    const [powerPoints, setPowerPoints] = useState(0)
    const [description, setDescription] = useState("")

    function handleSubmit() {
        console.log("submitted")
    }

    return (
        <div>
            <p>you can add skills here!</p>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder={"Skill name"}/>
                <input onChange={(e) => setPowerPoints(e.target.value)} value={powerPoints} type="number" placeholder="Power Points"/>
                <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Description"/>
            </form>
        </div>
    )
}

export default AddSkill