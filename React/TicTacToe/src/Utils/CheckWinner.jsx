const CheckWinner = (tiles) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [x, y, z] = winningCombinations[i];
    if (tiles[x] && tiles[x] === tiles[y] && tiles[y] === tiles[z]) {
      return [x, y, z];
    }
  }
  if (!tiles.includes("")) {
    return 0;
  }
};

export default CheckWinner;
