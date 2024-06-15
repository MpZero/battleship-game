const events = {};

export function subscribe(event, callback) {
  if (!events[event]) {
    events[event] = [];
  }
  events[event].push(callback);
}

export function publish(event, data) {
  if (events[event]) {
    events[event].forEach((callback) => callback(data));
  }
}

export default function DOM() {
  const playerGrid1 = document.querySelector("#player-grid1");
  const playerGrid2 = document.querySelector("#player-grid2");

  // Function to clear the grids
  function clearGrids() {
    playerGrid1.innerHTML = "";
    playerGrid2.innerHTML = "";
  }

  // Function to render the grids
  function renderGrids() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell1 = document.createElement("div");
        const cell2 = document.createElement("div");
        cell1.classList.add("grid-cell1");
        cell2.classList.add("grid-cell2");
        cell1.dataset.row = i;
        cell2.dataset.row = i;
        cell1.dataset.column = j;
        cell2.dataset.column = j;
        playerGrid1.appendChild(cell1);
        playerGrid2.appendChild(cell2);

        cell2.addEventListener("click", handleCellClick);
      }
    }
  }

  renderGrids(); // Render the grids initially

  function handleCellClick(e) {
    const row = parseInt(e.target.dataset.row, 10);
    const col = parseInt(e.target.dataset.column, 10);
    publish("cellClicked", { row, col });
  }

  // Function to delete and render the grids after game over
  function handleGameOver() {
    clearGrids();
    renderGrids();
  }

  // Subscribe to the "gameOver" event
  subscribe("gameOver", handleGameOver);
}
