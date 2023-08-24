import Gameboard from "./gameboard";
import Player from "./player";
import Ship from "./ship";
import Game from "./game";
export {UI}

const UI = (() => {
  const newGame = new Game();

  const drawPlayerGrid = () => {
    const playerBoard = document.querySelector('.player-box');
    for (let i = 0; i < 100; i++) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'gridp ' + 'p' + i)
      playerBoard.appendChild(newDiv)
    }
  }

  const drawComputerGrid = () => {
    const computerBoard = document.querySelector('.computer-box');
    for (let i = 0; i < 100; i++) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'grid ' + 'c' + i)
      computerBoard.appendChild(newDiv)
    }
  }

  const sendPlayerAttack = () => {
    for(let i = 0; i < newGame.players[1].gameboard.board.length; i++) {
      let elements = document.querySelectorAll('.c'+i)
      elements.forEach((div) => {
        div.addEventListener('click', () => {
          if (newGame.players[1].gameboard.board[i].isShot == true) {
            newGame.players[1].playerAttack(i);
            newGame.players[0].computerAttack();
            setTimeout(function() {
              UI.sendComputerAttack();
            }, 500)
            newGame.players[0].gameEnd();
            newGame.players[1].gameEnd();
            UI.gameLoop();
            return console.log('You already shot here')
          } else if (newGame.players[1].gameboard.board[i].isShot == false && newGame.players[1].gameboard.board[i].hasShip == false) {
            div.style.backgroundColor = 'white'
            newGame.players[1].playerAttack(i);
            newGame.players[0].computerAttack();
            setTimeout(function() {
              UI.sendComputerAttack();
            }, 500)
            newGame.players[0].gameEnd();
            newGame.players[1].gameEnd();
            UI.gameLoop();
            return console.log('Miss!', newGame)
          } else if (newGame.players[1].gameboard.board[i].isShot == false && newGame.players[1].gameboard.board[i].hasShip == true) {
            div.style.backgroundColor = 'red'
            newGame.players[1].playerAttack(i);
            newGame.players[0].computerAttack();
            setTimeout(function() {
              UI.sendComputerAttack();
            }, 500)
            newGame.players[0].gameEnd();
            newGame.players[1].gameEnd();
            UI.gameLoop();
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
        return console.log('computer already shot here')
      } else if (newGame.players[0].gameboard.board[target].isShot == false && newGame.players[0].gameboard.board[target].hasShip == false) {
        myArray[target].style.backgroundColor = 'white';
      } else if (newGame.players[0].gameboard.board[target].isShot == false && newGame.players[0].gameboard.board[target].hasShip == true) {
        myArray[target].style.backgroundColor = 'red'
      }
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
    for(let j = 0; j < newGame.players[0].gameboard.board.length; j++) {
      if (newGame.players[0].gameboard.board[j].hasShip == true) {
        let elements = document.querySelectorAll('.c'+j)
        elements.forEach((div) => {
          div.style.backgroundColor = 'black'
        })
      }
    }
  }
  const gameLoop = () => {
    if (newGame.players[0].gameOver == true) {
      return console.log('Computer Wins!')
    } else if (newGame.players[1].gameOver == true) {
      return console.log('Player Wins!')
    } else {
      return;
    }
    
  }

return {drawPlayerGrid, drawComputerGrid, sendPlayerAttack, drawShips, sendComputerAttack, gameLoop}
})();