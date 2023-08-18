// Creates player object

import Gameboard from "./gameboard"
import Ship from "./ship";

export default class Player {
  constructor(name) {
    this.name = name;
    this.turn = null;
    this.gameboard = new Gameboard([]);
  }
  // Write function for player attack
  // Write function for random computer attack
  playerAttack() {
    if (this.turn == false) {
      this.turn = true;
    } else if (this.turn == true) {
      this.turn = false;
    }
  }
}