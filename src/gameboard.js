// Creates gameboard object

import Ship from "../src/ship";

export default class Gameboard {
  constructor() {
    this.board = [];
    this.ships = [];
    if (!this.board.length) this.init();
  }
  init() {
    for (let i = 0; i < 100; i++) {
      this.board.push({hasShip: false, isShot: false, shipName: null});
    }
  }
  placeShips(pos1, direction, length, name) {
    let ship = new Ship(length, name)
      if(this.checkValidity(pos1) == true) {
        this.ships.push(ship);
      } else if (this.checkValidity(pos1) == false) {
        return console.log("Cannot overlap")
      }
    if (direction == "h") {
      for (let i = 0; i < length; i++) {
        this.board[pos1].hasShip = true;
        this.board[pos1].shipName = ship.name;
        pos1++
      }
    } else if (direction == "v") {
        for (let j = 0; j < length; j++) {
          this.board[pos1].hasShip = true;
          this.board[pos1].shipName = ship.name;
          pos1 += 10;
        }
    }
  }
  checkValidity(location) {
    for (let i = 0; i < this.board.length; i++) {
      if(this.board[location].hasShip == true) {
        return false;
      } else {
        return true;
      }
    }
  }
  recieveAttack(location) {
    if (this.board[location] == undefined) {
      return "Invalid location";
    } else if (this.board[location].isShot == false && this.board[location].hasShip == false) {
      this.board[location].isShot = true;
      return "Miss!"
    } else if (this.board[location].isShot == true) {
      return "Already attacked"
    } else if (this.board[location].isShot == false && this.board[location].hasShip == true) {
      this.board[location].isShot = true;
      for (let i = 0; i < this.ships.length; i++) {
        if (this.ships[i]['name'] == this.board[location].shipName) {
          this.ships[i].hit(true);
          this.ships[i].isSunk();
        }
      }
      return "Hit!"
    }
  }
  computerAttack() {
    let target = Math.floor(Math.random() * 100);
    if (this.board[target].isShot == true) {
      return;
    }
    return this.recieveAttack(target);
  }
  gameOver() {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].sunk == true) {
        return "Game Over"
      }
    }
  }
}