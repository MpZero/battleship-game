const Ship = require("./battleship.js");

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
