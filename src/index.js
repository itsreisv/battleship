import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";

let playerOne = new Player("Reis");
let playerTwo = new Player("Computer")
console.log(playerOne, playerTwo)

playerOne.gameboard.placeShips(5, 'v', 3, "Patrol")


playerOne.gameboard.recieveAttack(5);
playerOne.gameboard.recieveAttack(15);
playerOne.gameboard.recieveAttack(25);
console.log(playerOne.gameboard.gameOver())
