import Tile from "./Tile.jsx";

const Board = ({ tiles, onClick, winningTiles }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 m-4">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          value={tile}
          onClick={() => onClick(index)}
          iswinner={winningTiles.includes(index) ? true : false}
        />
      ))}
    </div>
  );
};

export default Board;
