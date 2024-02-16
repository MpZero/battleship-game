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

describe("Cpu AI testing ", () => {
  test("Cpu makes random moves", () => {
    const cpu = new Player("Cpu");
    const numPlays = 100;

    for (let i = 0; i < numPlays; i++) {
      const [x, y] = cpu.cpuPlay();
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(cpu.gameboard.size);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThan(cpu.gameboard.size);
    }
  });
  test("Cpu avoids duplicate moves", () => {
    const cpu = new Player("Cpu");
    const recordedMoves = new Set();

    for (let i = 0; i < 10; i++) {
      const [x, y] = cpu.cpuPlay();
      const moveString = JSON.stringify([x, y]);

      expect(recordedMoves.has(moveString)).toBe(false);
      recordedMoves.add(moveString);
    }
  });
});

// describe("Game flow", () => {
//   test("Correctly change turns", () => {
//     const me = new Player("Me");
//     const cpu = new Player("Cpu");
//   });
// });

// test("Swap between players when their turn is done", () => {
//   const me = new Player("Me");
//   const cpu = new Player("Cpu");
//   // const boat = new Ship(2);
//   me.gameboard.placeShip(boat, 0, 0, "horizontal");
//   cpu.gameboard.placeShip(boat, 3, 0, "vertical");
//   //I attack
//   cpu.gameboard.receiveAttack(3, 0);
//   //Cpu attacks
//   cpu.gameboard.receiveAttack(0, 0);
// });
//if player attacks and misses
//  next turn
//  opponent's gameboard registers miss
//  can't target same square
//if player attacks and hits
//  next turn
//  ship is hit
//  can't target same square
