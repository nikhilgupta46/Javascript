const existOnBoard = (board = [], word = "") => {
  let result = [];

  const startingWord = word[0];
  const startingPoints = [];
  let rowLength = board.length;
  let colLength = board[0].length;
  board.forEach((bo, i) => {
    bo.forEach((b, j) => {
      if (b === startingWord) {
        startingPoints.push([i, j]);
      }
    });
  });
  const backtrack = (i, j, pointer) => {
    if (result.length === word.length) {
      return true;
    }
    if (i < 0 || i >= rowLength || j < 0 || j >= colLength) {
      return false;
    }
    const wordHere = board[i][j];

    if (
      wordHere === word[pointer] &&
      !result.filter((value) => {
        return value[0] === i && value[1] === j;
      }).length
    ) {
      result.push([i, j]);
      if (result.length === word.length) {
        return true;
      } else {
        const adjacent1 = [i - 1, j];
        const adjacent2 = [i + 1, j];
        const adjacent3 = [i, j - 1];
        const adjacent4 = [i, j + 1];
        const coordinates = [adjacent1, adjacent2, adjacent3, adjacent4];
        const copyResult = [...result];
        for (let iter = 0; iter < coordinates.length; iter++) {
          const coords = coordinates[iter];
          backtrack(...coords, pointer + 1);
          if (result.length === word.length) {
            return true;
          } else {
            result = [...copyResult];
          }
        }
        return false;
      }
    } else {
      return;
    }
  };
  for (let iter = 0; iter < startingPoints.length; iter++) {
    const startingCoords = startingPoints[iter];
    result = [];
    backtrack(...startingCoords, 0);
    if (result.length === word.length) {
      return { isValid: true, path: result };
    }
  }
  return { isValid: false, result: "None" };
};

console.log(
  existOnBoard(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
console.log(
  existOnBoard(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
console.log(
  existOnBoard(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEED"
  )
);
