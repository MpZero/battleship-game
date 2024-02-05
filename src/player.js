const Gameboard = require("./gameboard");
const Ship = require("./battleship.js");
class Player {
  constructor(player) {
    this.player = player;
    this.gameboard = new Gameboard(10);
  }
}

// const boat = new Ship(2);
// const boat2 = new Ship(2);
// const submarine = new Ship(3);
// const destroyer = new Ship(3);
// const carrier = new Ship(4);

// const me = new Player("Me");

// me.gameboard.placeShip(boat, 0, 0, "horizontal");
// console.log(me.gameboard);
// console.log(me.gameboard.board[0][0]);
// const cpu = new Player("Cpu");
module.exports = Player;
