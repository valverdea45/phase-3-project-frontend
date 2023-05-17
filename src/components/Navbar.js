import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

function Navbar() {
    return (
        <div>
            <NavLink to="/pokemons/new" exact style={linkStyles} activeStyle={{
                background: "darkblue"
            }}>
                Add Pokemon
            </NavLink>
            <NavLink to="/pokemons" exact style={linkStyles} activeStyle={{
                background: "darkblue"
            }}>
                Pokemon List
            </NavLink>
        </div>
    )
}

export default Navbar