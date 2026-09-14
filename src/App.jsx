import "./styles/App.css";

function App() {
  return (
    <div className="flex flex-col">
      <header className="mb-3 font-pokemon-game text-2xl">
        Pokemon Memory Game
      </header>
      <p className="text-1xl font-pokemon-game">
        Get points by clicking on a pokemon, but don't click the same pokemon
        more than once!
      </p>
    </div>
  );
}

export default App;
