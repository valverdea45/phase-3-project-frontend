// import logo from '/home/valverdea45/Development/code/phase-3/phase-3-project-react/phase-3-project-react/src/logo.svg';
// import '/home/valverdea45/Development/code/phase-3/phase-3-project-react/phase-3-project-react/src/App.css';
import PokemonList from "./PokemonList";
import React, { useEffect, useState } from "react";

function App() {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
  fetch("http://localhost:9292/pokemons")
    .then((data) => data.json())
    .then((data) => setPokemon(data))
  }, [])

  console.log(pokemon)

  return (
    //  <div className="App">
    //   {<header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>}
    // </div>
    <div>
      <header>
        Welcome to your pokemon PC!!
      </header>

      <PokemonList pokemon={pokemon}/>

    </div>
  );
}

export default App;
