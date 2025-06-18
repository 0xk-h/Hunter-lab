import Tile from "./Tile.jsx";

const Board = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 m-4" >
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
    </div>
  )
}

export default Board