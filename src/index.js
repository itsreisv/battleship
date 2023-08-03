import Ship from "./ship";
import Gameboard from "./gameboard";

let newShip = new Ship(4, 'Cruiser', (4,5));
let newGame = new Gameboard([]);
console.log(newGame)
console.log(newShip);
console.log(newShip.position)