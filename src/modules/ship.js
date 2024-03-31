export default class Ship {
  constructor(shipType, length) {
    this.shipType = shipType;
    this.length = length;
    this.timesBeenHit = 0;
    this.shipStatus = "afloat";
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
