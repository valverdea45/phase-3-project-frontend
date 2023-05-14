import React from "react";

function Skill({ skill }) {


    return (
        <div>
            <p>skill name: {skill.name}</p>
            <p>skill description: {skill.description}</p>
            <p>skill power points: {skill.power_points}</p>
        </div>
    )
}

export default Skill