import Player from "./player.js";

export default function gameloop() {
  const player1 = new Player("User");
  const player2 = new Player("CPU");

  let currentPlayer = player1;
  let nextPlayer = player2;
  let gameOver = false;

  player1.placeShipManually("battleship", 4, 0, 0, "horizontal");
  player1.placeShipManually("sub", 3, 1, 0, "horizontal");
  player1.placeShipManually("destroyer", 3, 2, 0, "horizontal");
  player1.placeShipManually("boat1", 2, 4, 0, "horizontal");
  player1.placeShipManually("boat2", 2, 5, 0, "horizontal");

  player2.placeShipManually("battleship", 4, 0, 0, "horizontal");
  player2.placeShipManually("destroyer", 3, 1, 0, "horizontal");
  player2.placeShipManually("sub", 3, 2, 0, "horizontal");
  player2.placeShipManually("boat1", 2, 3, 0, "horizontal");
  player2.placeShipManually("boat2", 2, 4, 0, "horizontal");

  function switchTurn() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    nextPlayer = currentPlayer === player1 ? player2 : player1;
  }

  function play() {
    const player1Moves = new Set();
    const player2Moves = new Set();

    while (!gameOver) {
      console.log(`Current player: ${currentPlayer.player}`);

      // Get player move
      const [x, y] = nextPlayer.cpuPlay();

      // Store moves
      if (currentPlayer === player1) {
        player1Moves.add(JSON.stringify([x, y]));
      } else {
        player2Moves.add(JSON.stringify([x, y]));
      }

      // Check if the move hits a ship
      if (nextPlayer.gameboard.board[x][y] !== "miss") {
        // console.log("Hit!");

        // Check if all opponent's ships are sunk
        if (nextPlayer.gameboard.sunkShips()) {
          console.log(player1.gameboard.ships);
          console.log(player2.gameboard.ships);
          console.log(`${currentPlayer.player} wins!`);
          // console.log(player1Moves);
          // console.log(player2Moves);
          gameOver = true;
        }
      } else {
        // console.log("Miss!");
      }
      switchTurn();
    }
  }
  play();
}

gameloop();
