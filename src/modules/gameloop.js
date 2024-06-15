import DOM from "./DOMinteraction.js";
import { subscribe } from "./DOMinteraction.js";
import Player from "./player.js";

export default function gameloop() {
  DOM();
  const player1 = new Player("User");
  const player2 = new Player("CPU");

  let currentPlayer = player1;
  let nextPlayer = player2;
  let gameOver = false;

  player1.placeShipManually("battleship", 4, 0, 0, "horizontal");
  player1.placeShipManually("sub", 3, 1, 0, "horizontal");
  player1.placeShipManually("destroyer", 3, 2, 0, "horizontal");
  player1.placeShipManually("boat1", 2, 3, 0, "horizontal");
  player1.placeShipManually("boat2", 2, 4, 0, "horizontal");

  // player2.placeShipManually("battleship", 4, 0, 0, "horizontal");
  // player2.placeShipManually("destroyer", 3, 1, 0, "horizontal");
  // player2.placeShipManually("sub", 3, 2, 0, "horizontal");
  // player2.placeShipManually("boat1", 2, 3, 0, "horizontal");
  player2.placeShipManually("boat2", 2, 4, 0, "horizontal");

  function play() {
    const playerGrid1 = document.querySelector("#player-grid1");
    const playerGrid2 = document.querySelector("#player-grid2");
    const p1Name = document.querySelector("#p1-name");
    const p2Name = document.querySelector("#p2-name");

    function handleCellClicked({ row, col }) {
      console.log(`Cell clicked: Row ${row}, Column ${col}`);
      // Check if the move hits a ship
      checkHit(row, col);
    }

    subscribe("cellClicked", handleCellClicked);

    function player1Turn() {
      if (!gameOver) {
      }
    }

    function player2Turn() {
      if (!gameOver) {
        const [x, y] = player2.cpuPlay();
        checkHit(x, y);
      }
    }

    function checkHit(row, col) {
      const opponent = currentPlayer === player1 ? player2 : player1;

      if (opponent.gameboard.receiveAttack(row, col)) {
        updateCellStatus(row, col, "hit");
      } else {
        updateCellStatus(row, col, "miss");
      }

      if (opponent.gameboard.sunkShips()) {
        if (currentPlayer === player1) {
          p1Name.textContent = "Player 1 WINS";
        } else {
          p2Name.textContent = "Player 2 WINS";
        }
        console.log(`${currentPlayer.player} wins!`);
        gameOver = true;
        // setTimeout(() => {
        //   clearGrids();
        //   p1Name.textContent = "Player 1";
        //   p2Name.textContent = "Player 2";
        // }, 3000);
      }

      if (gameOver) {
        console.log("Game over!");
        setTimeout(() => {
          clearGrids();
          p1Name.textContent = "Player 1";
          p2Name.textContent = "Player 2";
          DOM();
          play();
        }, 1000);

        return;
      }

      switchTurn();
    }

    function clearGrids() {
      playerGrid1.innerHTML = "";
      playerGrid2.innerHTML = "";
    }

    function switchTurn() {
      currentPlayer = currentPlayer === player1 ? player2 : player1;

      if (currentPlayer === player1) {
        player1Turn();
      } else {
        player2Turn();
      }
    }

    function updateCellStatus(row, column, status) {
      if (currentPlayer === player1) {
        const cell = document.querySelector(
          `.grid-cell2[data-row="${row}"][data-column="${column}"]`
        );
        cell.classList.add(status); // Add appropriate CSS class (e.g., "hit" or "miss")
      } else {
        const cell = document.querySelector(
          `.grid-cell1[data-row="${row}"][data-column="${column}"]`
        );
        cell.classList.add(status); // Add appropriate CSS class (e.g., "hit" or "miss")
      }

      // Start the game with player1's turn
      player1Turn();
    }
  }
  play();
}
