import Ship from "../src/ship";

export default class Gameboard {
  constructor(board) {
    this.board = [];
    this.ships = []
    if (!this.board.length) this.init();
    if (!this.ships.length) this.shipArray();
    this.placeShips(4, 'Cruzer', 25,26,27,28);
    this.recieveAttack(25);
  }
  init() {
    for (let i = 0; i < 100; i++) {
      this.board.push({hasShip: false, isShot: false});
    }
  }
  shipArray() {
    let carrier = new Ship(5, 'Carrier', null);
    let battleship = new Ship(4, 'Battleship', null);
    let destroyer = new Ship(3, 'Destroyer', null);
    let submarine = new Ship(3, 'Submarine', null);
    let patrolBoat = new Ship(2, 'Patrol Boat', null);
    this.ships.push(carrier, battleship, destroyer, submarine, patrolBoat);
  }
  placeShips(length, name, Vposition, Wposition, Xposition, Yposition, Zposition) {
    let newShip = new Ship(length, name, this.board[Vposition], this.board[Wposition], this.board[Xposition], this.board[Yposition], this.board[Zposition]);
    this.ships.push(newShip)
    if (this.board[Vposition] == undefined) {
      return;
    } else if (this.board[Vposition].hasShip == false) {
      this.board[Vposition].hasShip = true;
    }
    if (this.board[Wposition] == undefined) {
      return;
    } else if (this.board[Wposition].hasShip == false) {
      this.board[Wposition].hasShip = true;
    }
    if (this.board[Xposition] == undefined) {
      return;
    } else if (this.board[Xposition].hasShip == false) {
      this.board[Xposition].hasShip = true;
    }
    if (this.board[Yposition] == undefined) {
      return;
    } else if (this.board[Yposition].hasShip == false) {
      this.board[Yposition].hasShip = true;
    }
    if (this.board[Zposition] == undefined) {
      return;
    } else if (this.board[Zposition].hasShip == false) {
      this.board[Zposition].hasShip = true;
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
      return "Hit!"
    }
}
}