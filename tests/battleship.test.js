const Ship = require("../src/battleship");

const destroyer = new Ship(3, 0, "afloat");

describe("Ship objects and their properties", () => {
  test("Check the ship's length ", () => {
    expect(destroyer.length).toBe(3);
  });
  test("Check how many times the ship has been hit", () => {
    expect(destroyer.timesBeenHit).toBe(0);
  });
  test("Check ship's status", () => {
    expect(destroyer.shipStatus).toBe("afloat");
  });
});

describe("Ship functions", () => {
  test("Ship hit count increases by 1 until it reaches its length", () => {
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    destroyer.hit(); // length = 3, can't hit the ship anymore
    expect(destroyer.timesBeenHit).toBe(3);
  });
  test("Check if the ship is sunk", () => {
    expect(destroyer.shipStatus).toBe("sunk");
  });
});
