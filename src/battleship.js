class Ship {
  constructor(length, timesBeenHit, shipStatus) {
    this.length = length;
    this.timesBeenHit = timesBeenHit;
    this.shipStatus = shipStatus;
  }

  hit() {
    if (this.shipStatus !== "sunk") {
      this.timesBeenHit++;
      return this.isSunk();
    }
  }

  isSunk() {
    if (this.length === this.timesBeenHit) {
      return (this.shipStatus = "sunk");
    }
    return;
  }
}

// const battleship = new Ship(4, 0, "afloat");
// const destroyer = new Ship(3, 0, "afloat");
// const submarine = new Ship(3, 0, "afloat");
// const boat1 = new Ship(2, 0, "afloat");
// const boat2 = new Ship(2, 0, "afloat");

module.exports = Ship;
