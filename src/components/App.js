// import logo from '/home/valverdea45/Development/code/phase-3/phase-3-project-react/phase-3-project-react/src/logo.svg';
// import '/home/valverdea45/Development/code/phase-3/phase-3-project-react/phase-3-project-react/src/App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PokemonList from "./PokemonList";
import AddPokemon from "./AddPokemon";
import Navbar from "./Navbar"
import Home from "./Home";


function App() {

  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/pokemons")
      .then((data) => data.json())
      .then((data) => setAllPokemon(data))
  }, [])

  console.log("pokemon list component", allPokemon)

  function onAddPokemon(newPokemon) {
    setAllPokemon([...allPokemon, newPokemon])
  }

  function onPokemonUpdate(updatedPokemon) {
    const newArrayOfPokemon = allPokemon.map((pokemon) => {
      if (pokemon.id === updatedPokemon.id) {
        return updatedPokemon
      } else {
        return pokemon
      }
    })
    setAllPokemon(newArrayOfPokemon)
  }

  function handlePokemonDelete(deletedPokemon) {
    const newArrayOfPokemon = allPokemon.filter((pokemon) => pokemon.id !== deletedPokemon.id)
    setAllPokemon(newArrayOfPokemon)
  }

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
      <Navbar />
      <Switch>
        <Route exact path="/pokemons/new">
          <AddPokemon onAddPokemon={onAddPokemon} />
        </Route>
        <Route exact path="/pokemons">
          <PokemonList allPokemon={allPokemon} onPokemonUpdate={onPokemonUpdate} handlePokemonDelete={handlePokemonDelete} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
