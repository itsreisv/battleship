import Game from "./game";
import { UI } from "./UI";
import Gameboard from "./gameboard";
import Player from "./player";

let newGame = new Game();
newGame.players[0].turn = true;
newGame.players[1].turn = false;
console.log(newGame);

UI.drawPlayerGrid();
UI.drawComputerGrid();
UI.drawShips();
UI.sendPlayerAttack();
