const Ship = require("./battleship.js");
class Gameboard {
  constructor(size) {
    this.size = size;
    this.board = [];
    for (let i = 0; i < size; i++) {
      this.board[i] = [];
      for (let j = 0; j < size; j++) {
        this.board[i][j] = null;
      }
    }
  }

  placeShip(ship, x, y, orientation) {
    if (orientation === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = ship;
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y] === null) {
      this.board[x][y] = "miss";
    } else {
      this.board[x][y].hit();
    }
  }
}
// const board = new Gameboard(10);
// const destroyer = new Ship(3, 0, "afloat");
// board.placeShip(destroyer, 0, 0, "horizontal");
// board.receiveAttack(0, 0);
// board.receiveAttack(0, 1);
// board.receiveAttack(0, 2);
// board.receiveAttack(0, 3); //doesn't work
// console.log(board.board[0][2]);
// console.log(board.board[0][3]); // doesn't work
// console.log(board.board[0][0]); // doesn't work

module.exports = Gameboard;
