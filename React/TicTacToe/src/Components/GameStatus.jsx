const GameStatus = ({ isDraw, winner, currPlayer }) => {
  if (isDraw) {
    return (
      <div className="text-2xl mb-4 text-slate-400">
        It's a <span className="font-semibold text-yellow-400 p-1">Draw</span>!
      </div>
    );
  }
  if (winner) {
    return (
      <div className="text-2xl mb-4 text-slate-400">
        Player{" "}
        <span
          className={`font-semibold ${
            winner === "X" ? "text-cyan-400" : "text-emerald-500"
          } p-1`}
        >
          {winner}
        </span>{" "}
        wins!
      </div>
    );
  }
  return (
    <div className="text-2xl mb-4 text-slate-400">
      Player{" "}
      <span
        className={`font-semibold ${
          currPlayer === "X" ? "text-cyan-400" : "text-emerald-500"
        } p-1`}
      >
        {currPlayer}
      </span>
      's turn
    </div>
  );
};

export default GameStatus;
