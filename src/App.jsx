import "./styles/App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="flex flex-col">
      <header className="mb-3 font-pokemon-game text-2xl">
        Pokemon Memory Game
      </header>
      <p className="font-pokemon-game text-xl">
        Get points by clicking on a pokemon, but don't click the same pokemon
        more than once!
      </p>
      <Board />
    </div>
  );
}

export default App;
