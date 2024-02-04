const Gameboard = require("../src/gameboard.js");
const Ship = require("../src/battleship.js");

test("Gameboard returns the correct number of grids", () => {
  const board = new Gameboard(10);

  expect(board.board.length).toBe(10);
  expect(board.board[0].length).toBe(10);
});

test("Gameboard displays the ship in the correct coordinates", () => {
  const board = new Gameboard(10);
  const destroyer = new Ship(3);
  board.placeShip(destroyer, 0, 0, "horizontal");

  expect(board.board[0][0]).toStrictEqual(destroyer);
  expect(board.board[0][1]).toStrictEqual(destroyer);
  expect(board.board[0][2]).toStrictEqual(destroyer);
});

test("Increase hit counter when a ship gets hit in the correct coordinates", () => {
  const board = new Gameboard(10);
  const destroyer = new Ship(3);
  board.placeShip(destroyer, 0, 0, "horizontal");
  board.receiveAttack(0, 0);
  board.receiveAttack(0, 1);
  board.receiveAttack(0, 2);

  expect(destroyer.timesBeenHit).toStrictEqual(3);
  expect(destroyer.shipStatus).toStrictEqual("sunk");
});

test("Gameboard handles missed shots correctly", () => {
  const board = new Gameboard(10);
  board.receiveAttack(1, 0);
  board.receiveAttack(1, 1);

  expect(board.board[1][0]).toStrictEqual("miss");
  expect(board.board[1][1]).toStrictEqual("miss");
});
