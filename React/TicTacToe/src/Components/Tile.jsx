const Tile = ({ value, onClick, iswinner }) => {
  return (
    <div
      className={`bg-gray-900 text-5xl ${
        value === "X" ? "text-cyan-400" : "text-emerald-500"
      } rounded-lg min-w-27 min-h-27 flex justify-center items-center ${
        iswinner ? "ring-2 ring-amber-400 shadow-xl shadow-orange-800" : ""
      } hover:shadow-cyan-500 hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};
// cyan-400  emerald-500
export default Tile;
