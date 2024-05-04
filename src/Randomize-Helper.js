// This 2 functions serve for AI.js to generate randomMoves and for Gameboard to generate random ships placements.

export function generateRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const randomNumb = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled
  );
  return randomNumb;
}

export function generateRandomMove() {
  // 65 74
  const col = generateRandom(65, 74);
  const row = generateRandom(1, 10);
  const string = String.fromCharCode(col);
  const concat = string.concat(row.toString());
  return concat;
}
