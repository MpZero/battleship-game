const Gameboard = require("./gameboard");
const Ship = require("./battleship.js");
class Player {
  constructor(player) {
    this.player = player;
    this.gameboard = new Gameboard(10);
    this.recordedMoves = new Set();
  }

  cpuPlay() {
    let x = Math.floor(Math.random() * this.gameboard.size);
    let y = Math.floor(Math.random() * this.gameboard.size);

    // Check if the coords are already recorded
    const newMove = [x, y];
    if (this.recordedMoves.has(JSON.stringify(newMove))) {
      return this.cpuPlay();
    }

    // Record the unique move
    this.recordedMoves.add(JSON.stringify(newMove));

    this.gameboard.receiveAttack(x, y);
    return [x, y];
  }
}

// const me = new Player("me");
// const cpu = new Player("cpu");
// me.cpuPlay();
// cpu.gameboard.receiveAttack(0, 1);
// console.log(me.gameboard);
// console.log(cpu.gameboard);
// const boat = new Ship(2);
// const boat2 = new Ship(2);
// const submarine = new Ship(3);
// const destroyer = new Ship(3);
// const carrier = new Ship(4);
// const me = new Player("Me");

module.exports = Player;
