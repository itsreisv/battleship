import Ship from "../src/ship";

export default class Gameboard {
  constructor(board) {
    this.board = [];
    if (!this.board.length) this.init();
  }
  init() {
    for (let i = 0; i < 100; i++) {
      this.board.push({hasShip: false, isShot: false});
    }
  }
}