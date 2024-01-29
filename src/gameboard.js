const Ship = require("./battleship.js");
class Gameboard {
  constructor(size) {
    this.size = size;
    this.board = [];
    for (let i = 0; i < size; i++) {
      this.board[i] = [];
      for (let j = 0; j < size; j++) {
        this.board[i][j] = [i, j];
      }
    }
  }

  placeShip(ship) {
    this.board[0][0] = [ship];
    this.board[0][1] = [ship];
    this.board[0][2] = [ship];
  }
}

// const board = new Gameboard(10);
// const destro = new Ship(3, 0, "afloat");

// board.placeShip(destro);

module.exports = Gameboard;
