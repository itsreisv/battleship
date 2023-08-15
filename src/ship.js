// Factory Function to create ships

export default class Ship {
  constructor (length, name) {
    this.length = length;
    this.name = name;
    this.hits = 0;
    this.sunk = false;
  }
  hit(x) {
    if (x == true) {
     return this.hits++
    } else {
      return console.log("Missed")
    }
  }
  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
    } else {
      this.sunk = false;
    }
    return;
  }
}