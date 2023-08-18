import Gameboard from "../src/gameboard";
import Player from "../src/player";

test("Player Attack", () =>{
  let playerOne = new Player("Reis");
  playerOne.playerAttack(25);

  expect(playerOne.gameboard.board[25]).toEqual({hasShip: false, isShot: true, shipName: null});
})