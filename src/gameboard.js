import Ship from "../src/ship";

export default class Gameboard {
  constructor(board) {
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
    this.ships.push(ship);
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
  recieveAttack(location) {
    if (this.board[location] == undefined) {
      return "Select a valid location";
    } else if (this.board[location].isShot == false && this.board[location].hasShip == false) {
      this.board[location].isShot = true;
      return "You missed!"
    } else if (this.board[location].isShot == true) {
      return "You already shot here"
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
  gameOver() {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].sunk == true) {
        return console.log("Game Over")
      }
    }
  }
}