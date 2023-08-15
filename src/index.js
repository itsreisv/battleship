import Ship from "./ship";
import Gameboard from "./gameboard";

let newGame = new Gameboard([]);
newGame.placeShips(5, "v", 3, "Destroyer")
newGame.placeShips(10, "v", 4, "Cruiser")
newGame.recieveAttack(5)
newGame.recieveAttack(15)
newGame.recieveAttack(25)
newGame.gameOver();
console.log(newGame.ships[1])
console.log(newGame.ships[0])
console.log(newGame)
console.log(newGame.ships[0]['name'])