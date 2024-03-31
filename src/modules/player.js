import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
export default class Player {
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

  placeShipManually(shipType, size, x, y, orientation) {
    const newShip = new Ship(shipType, size);
    this.gameboard.placeShip(newShip, x, y, orientation);
  }
}
