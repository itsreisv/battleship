import Game from "./game";
import { UI } from "./UI";
import Gameboard from "./gameboard";
import Player from "./player";
import { gameStartModal } from "./modals";

let newGame = new Game();
console.log(newGame);

UI.drawPlayerGrid();
UI.drawComputerGrid();
UI.displayInfo();



gameStartModal();
submitButton();




function submitButton() {
  const submit = document.querySelector('.submit')
  const modal = document.querySelector('.start-modal')
  const carrierDir = document.querySelector('#carrier-dir');
  const carrierNum = document.querySelector('#carrier-num');
  const battleshipDir = document.querySelector('#battleship-dir');
  const battleshipNum = document.querySelector('#battleship-num');
  const destroyerDir = document.querySelector('#destroyer-dir');
  const destroyerNum = document.querySelector('#destroyer-num');
  const submarineDir = document.querySelector('#submarine-dir');
  const submarineNum = document.querySelector('#submarine-num');
  const patrolDir = document.querySelector('#patrol-dir');
  const patrolNum = document.querySelector('#patrol-num');

  submit.addEventListener('click', () => {


    newGame.players[0].gameboard.placeShips(parseInt(carrierNum.value),carrierDir.value, 5, 'Carrier')
    newGame.players[0].gameboard.placeShips(parseInt(battleshipNum.value), battleshipDir.value, 4, 'Battleship')
    newGame.players[0].gameboard.placeShips(parseInt(destroyerNum.value), destroyerDir.value, 3, 'Destroyer')
    newGame.players[0].gameboard.placeShips(parseInt(submarineNum.value), submarineDir.value, 3, 'Submarine')
    newGame.players[0].gameboard.placeShips(parseInt(patrolNum.value), patrolDir.value, 2, 'Patrol')
    
    drawShips();
    modal.remove();
  })
}

const drawShips = () => {
  for (let i = 0; i < newGame.players[0].gameboard.board.length; i++) {
    if (newGame.players[0].gameboard.board[i].hasShip == true) {
      let elements = document.querySelectorAll('.p'+i)
      elements.forEach((div) => {
        div.style.backgroundColor = 'black'
      })
    }
  }
}

const sendPlayerAttack = () => {
  const info = document.querySelector('.current-info')
  for(let i = 0; i < newGame.players[1].gameboard.board.length; i++) {
    let elements = document.querySelectorAll('.c'+i)
    elements.forEach((div) => {
      div.addEventListener('click', () => {
        if (newGame.players[1].gameboard.board[i].isShot == true) {
          newGame.players[1].playerAttack(i);
          newGame.players[0].computerAttack();
          setTimeout(function() {
            sendComputerAttack();
          }, 250)
          newGame.players[0].gameEnd();
          newGame.players[1].gameEnd();
          gameLoop();
          info.textContent = 'You already shot here'
          return console.log('You already shot here')
        } else if (newGame.players[1].gameboard.board[i].isShot == false && newGame.players[1].gameboard.board[i].hasShip == false) {
          div.style.backgroundColor = 'white'
          newGame.players[1].playerAttack(i);
          newGame.players[0].computerAttack();
          setTimeout(function() {
            sendComputerAttack();
          }, 250)
          newGame.players[0].gameEnd();
          newGame.players[1].gameEnd();
          gameLoop();
          info.textContent = 'Miss!'
          return console.log('Miss!', newGame)
        } else if (newGame.players[1].gameboard.board[i].isShot == false && newGame.players[1].gameboard.board[i].hasShip == true) {
          div.style.backgroundColor = 'red'
          newGame.players[1].playerAttack(i);
          newGame.players[0].computerAttack();
          setTimeout(function() {
            sendComputerAttack();
          }, 250)
          newGame.players[0].gameEnd();
          newGame.players[1].gameEnd();
          gameLoop();
          info.textContent = 'Hit!'
          return console.log('Hit!', newGame)
        }
      })
    })
  }
}
const sendComputerAttack = () => {
  let elements = document.querySelectorAll('.gridp');
  let myArray = Array.from(elements)
  let target = Math.floor(Math.random() * 100)
    if (newGame.players[0].gameboard.board[target].isShot == true) {
      sendComputerAttack();
    } else if (newGame.players[0].gameboard.board[target].isShot == false && newGame.players[0].gameboard.board[target].hasShip == false) {
      myArray[target].style.backgroundColor = 'white';
    } else if (newGame.players[0].gameboard.board[target].isShot == false && newGame.players[0].gameboard.board[target].hasShip == true) {
      myArray[target].style.backgroundColor = 'red'
    }
}


const gameLoop = () => {
  const p = document.querySelector('.win-info')
  if (newGame.players[0].gameOver == true) {
    p.textContent = ' Computer Wins!'
    return 
  } else if (newGame.players[1].gameOver == true) {
    p.textContent = ' Player Wins!'
    return 
  } else {
    return;
  } 
}

sendPlayerAttack();