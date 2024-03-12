import DOM from "./DOMinteraction.js";
import Player from "./player.js";
import Ship from "./ship.js";

export default function gameloop() {
  const battleship = new Ship(4, 0, "afloat");
  const destroyer = new Ship(3, 0, "afloat");
  const submarine = new Ship(3, 0, "afloat");
  const boat1 = new Ship(2, 0, "afloat");
  const boat2 = new Ship(2, 0, "afloat");

  const player1 = new Player("User");
  const player2 = new Player("CPU");

  player1.gameboard.placeShip(battleship, 0, 0, "horizontal");
  player1.gameboard.placeShip(destroyer, 1, 0, "horizontal");
  player1.gameboard.placeShip(submarine, 2, 0, "horizontal");
  player1.gameboard.placeShip(boat1, 3, 0, "horizontal");
  player1.gameboard.placeShip(boat2, 4, 0, "horizontal");

  player2.gameboard.placeShip(battleship, 5, 0, "horizontal");
  player2.gameboard.placeShip(destroyer, 6, 0, "horizontal");
  player2.gameboard.placeShip(submarine, 7, 0, "horizontal");
  player2.gameboard.placeShip(boat1, 8, 0, "horizontal");
  player2.gameboard.placeShip(boat2, 9, 0, "horizontal");
  console.log(player1.gameboard);
  console.log(player2.gameboard);
  DOM();
}
