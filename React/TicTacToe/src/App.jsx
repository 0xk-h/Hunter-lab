import Board from "./Components/Board";
import ResetButton from "./Components/ResetButton";
import GameStatus from "./Components/GameStatus";
import CheckWinner from "./Utils/CheckWinner";
import { useState } from "react";

const App = () => {
  const [tiles, setTiles] = useState(Array(9).fill(""));
  const [currPlayer, setCurrPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [isDraw, setIsDraw] = useState(false);
  const [winningTiles, setWinningTiles] = useState([]);

  const handleTileClick = (index) => {
    if (tiles[index] || winner) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = currPlayer;
    setTiles(newTiles);

    const gameWinner = CheckWinner(newTiles);
    if (gameWinner === 0) {
      setIsDraw(true);
    } else if (gameWinner) {
      setWinner(newTiles[gameWinner[0]]);
      setWinningTiles(gameWinner);
    } else {
      setCurrPlayer(currPlayer === "X" ? "O" : "X");
    }
  };
  const resetGame = () => {
    setTiles(Array(9).fill(""));
    setCurrPlayer("X");
    setWinner("");
    setIsDraw(false);
    setWinningTiles([]);
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 to-purple-950 h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold text-white mb-12 ">
        React{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 text-transparent bg-clip-text">
          XO
        </span>{" "}
        Game
      </h1>
      <GameStatus isDraw={isDraw} winner={winner} currPlayer={currPlayer} />

      <Board
        tiles={tiles}
        currPlayer={currPlayer}
        onClick={handleTileClick}
        winningTiles={winningTiles}
      />

      <ResetButton reset={resetGame} />
    </div>
  );
};

export default App;
