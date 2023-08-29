import Gameboard from "./gameboard";
import Player from "./player";
import Ship from "./ship";


export default class Game {
  constructor() {
    this.players = [];
    if(!this.players.length) this.initGame();
  }
  initGame() {
    let playerOne = new Player('Player');
    let playerTwo = new Player('Computer');
    this.players.push(playerOne, playerTwo)

    playerOne.gameboard.placeShips(0, 'h', 5, "Carrier")
    playerOne.gameboard.placeShips(8, 'v', 4, "Battleship")
    playerOne.gameboard.placeShips(54, 'h', 3, "Destroyer")
    playerOne.gameboard.placeShips(74, 'h', 3, "Submarine")
    playerOne.gameboard.placeShips(87, 'h', 2, "Patrol Boat")

    playerTwo.gameboard.placeShips(21, 'h', 5, "Carrier")
    playerTwo.gameboard.placeShips(8, 'v', 4, "Battleship")
    playerTwo.gameboard.placeShips(51, 'h', 3, "Destroyer")
    playerTwo.gameboard.placeShips(74, 'v', 3, "Submarine")
    playerTwo.gameboard.placeShips(87, 'h', 2, "Patrol Boat")
  }

}