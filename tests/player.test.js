const Player = require("../src/player.js");
const Ship = require("../src/battleship.js");
describe("Correctly initialize 2 players", () => {
  test("Correctly initialize 2 players", () => {
    const me = new Player("Me");
    const cpu = new Player("Cpu");
    expect(me.gameboard.size).toBe(10);
    expect(cpu.gameboard.size).toBe(10);
  });

  test("Correctly place player's ships", () => {
    const me = new Player("Me");
    const cpu = new Player("Cpu");
    const boat = new Ship(2);
    const destroyer = new Ship(3);
    me.gameboard.placeShip(boat, 0, 0, "horizontal");
    cpu.gameboard.placeShip(boat, 0, 0, "horizontal");
    me.gameboard.placeShip(destroyer, 3, 0, "vertical");
    cpu.gameboard.placeShip(destroyer, 3, 0, "vertical");

    expect(me.gameboard.board[0][0] && cpu.gameboard.board[0][0]).toStrictEqual(
      boat
    );
    expect(me.gameboard.board[3][0] && cpu.gameboard.board[3][0]).toStrictEqual(
      destroyer
    );
  });
});
// test("Swap between players when the turn is done", () => {});
// test("The computer makes random plays", () => {});
// test("The computer can't shoot the same coordinate twice", () => {});
