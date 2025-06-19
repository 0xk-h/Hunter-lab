import Tile from "./Tile.jsx";

const Board = ({ tiles, onClick }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 m-4" >
      {tiles.map((tile,index) => 
        <Tile
          key={index}
          value={tile}
          onClick={() => onClick(index)}
        />
      )}
    </div>
  )
}

export default Board