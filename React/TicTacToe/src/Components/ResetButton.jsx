const ResetButton = ({ reset }) => {
  return (
    <>
      <button
        className="bg-purple-700 text-white font-bold rounded-full mt-8 px-4 py-2 cursor-pointer hover:bg-red-800 hover:ring-1 hover:ring-purple-700"
        onClick={reset}
      >
        Restart
      </button>
    </>
  );
};

export default ResetButton;
