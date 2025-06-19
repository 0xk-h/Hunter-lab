

const Tile = ({ value, onClick }) => {
  return (
    <div className={`bg-gray-900 text-5xl ${ value === "X" ? "text-cyan-400" : "text-emerald-500"} rounded-md p-12 flex justify-center itens-ceter hover:shadow-cyan-500 hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out`} onClick={onClick}>
      {value}
    </div>
  )
}
// cyan-400  emerald-500
export default Tile