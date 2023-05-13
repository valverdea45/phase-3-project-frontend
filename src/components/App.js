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
      <Navbar/>
      <Switch>
        <Route exact path="/AddPokemon">
          <AddPokemon/>
        </Route>
        <Route exact path="/PokemonList">
          <PokemonList allPokemon={allPokemon}/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
