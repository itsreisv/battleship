// Creates player object

import Gameboard from "./gameboard"
import Ship from "./ship";

export default class Player {
  constructor(name) {
    this.name = name;
    this.gameOver = false;
    this.gameboard = new Gameboard([]);
  }
  // Write function for player attack
  // Write function for random computer attack
  playerAttack(location) {
    if (this.gameboard.board[location].isShot == false && this.gameboard.board[location].hasShip == false) {
      this.gameboard.board[location].isShot = true;
      return;
    } else if (this.gameboard.board[location].isShot == true) {
      return;
    } else if (this.gameboard.board[location].isShot == false && this.gameboard.board[location].hasShip == true) {
      this.gameboard.board[location].isShot = true;
      for (let i = 0; i < this.gameboard.ships.length; i++) {
        if (this.gameboard.ships[i]['name'] == this.gameboard.board[location].shipName) {
          this.gameboard.ships[i].hit(true);
          this.gameboard.ships[i].isSunk();
        }
      }
      return;
    }
  }
  computerAttack() {
    let target = Math.floor(Math.random() * 100);
    if (this.gameboard.board[target].isShot == false && this.gameboard.board[target].hasShip == false) {
      this.gameboard.board[target].isShot = true;
      console.log('miss')
    } else if (this.gameboard.board[target].isShot == true) {
      console.log('already shot here')
    } else if (this.gameboard.board[target].isShot == false && this.gameboard.board[target].hasShip == true) {
      this.gameboard.board[target].isShot = true;
      for (let i = 0; i < this.gameboard.ships.length; i++) {
        if (this.gameboard.ships[i]['name'] == this.gameboard.board[target].shipName) {
          this.gameboard.ships[i].hit(true);
          this.gameboard.ships[i].isSunk();
          console.log('hit')
        }
      }
    }
  }
  gameEnd() {
    for (let i = 0; i < this.gameboard.ships.length; i++) {
      if (this.gameboard.ships[0].sunk == false && this.gameboard.ships[1].sunk == false && this.gameboard.ships[2].sunk == false && this.gameboard.ships[3].sunk == false && this.gameboard.ships[4].sunk == false) {
        return;
      } else if (this.gameboard.ships[0].sunk == true && this.gameboard.ships[1].sunk == true && this.gameboard.ships[2].sunk == true && this.gameboard.ships[3].sunk == true && this.gameboard.ships[4].sunk == true) {
        this.gameOver = true;
      }
    }
  }
}