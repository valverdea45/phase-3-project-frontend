// import logo from '/home/valverdea45/Development/code/phase-3/phase-3-project-react/phase-3-project-react/src/logo.svg';
// import '/home/valverdea45/Development/code/phase-3/phase-3-project-react/phase-3-project-react/src/App.css';
import PokemonList from "./PokemonList";

function App() {
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

      <PokemonList/>

    </div>
  );
}

export default App;
