export default function DOM() {
  // let div = document.createElement("div");
  const playerGrid1 = document.querySelector("#player-grid1");
  const playerGrid2 = document.querySelector("#player-grid2");
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    playerGrid1.append(div);
  }
  console.log("hey");
  console.log(playerGrid1);
}
