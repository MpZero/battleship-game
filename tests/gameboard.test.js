const Gameboard = require("../src/gameboard.js");
const Ship = require("../src/battleship.js");

// const board = new Gameboard(10);

test("Gameboard returns the correct number of grids", () => {
  const board = new Gameboard(10);

  expect(board.board.length).toBe(10);
  expect(board.board[0].length).toBe(10);
});

test("Gameboard displays the ship in the correct coordinates", () => {
  const board = new Gameboard(10);
  const destroyer = new Ship(3, 0, "afloat");
  board.placeShip(destroyer);

  expect(board.board[0][0]).toStrictEqual([destroyer]);
  expect(board.board[0][1]).toStrictEqual([destroyer]);
  expect(board.board[0][2]).toStrictEqual([destroyer]);
});
