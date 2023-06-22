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

  

  function onAddPokemon(newItem) {
    setAllPokemon([...allPokemon, newItem])
  }

  function onPokemonUpdate(updatePokemon) {

    const newArrayOfPokemon = allPokemon.map((pokemon) => {
        if (pokemon.id === updatePokemon.id) {
          return updatePokemon
        } else {
          return pokemon
        }
      })

    setAllPokemon(newArrayOfPokemon)   

  }

  function handlePokemonDelete(deletedPokemonId) {
    const newArrayOfPokemon = allPokemon.filter((pokemon) => pokemon.id !== deletedPokemonId)
    setAllPokemon(newArrayOfPokemon)
  }

  

  return (
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
