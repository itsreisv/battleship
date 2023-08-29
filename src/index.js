import Game from "./game";
import { UI } from "./UI";
import Gameboard from "./gameboard";
import Player from "./player";
import { gameStartModal, rotateButtonOne, rotateButtonTwo, rotateButtonThree, rotateButtonFour, rotateButtonFive } from "./modals";

let newGame = new Game();
console.log(newGame);

gameStartModal();
// rotateButtonOne();
// rotateButtonTwo();
// rotateButtonThree();
// rotateButtonFour();
// rotateButtonFive();

UI.drawPlayerGrid();
UI.drawComputerGrid();
UI.drawShips();
UI.sendPlayerAttack();
