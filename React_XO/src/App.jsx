import Board from "./Components/Board";
import ResetButton from "./Components/ResetButton";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-purple-950 h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold text-white mb-12 ">
        React <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 text-transparent bg-clip-text">XO</span> Game
      </h1>
      <Board />
      <ResetButton />
    </div>
  )
}

export default App