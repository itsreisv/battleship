import Gameboard from "./gameboard";
import Player from "./player";
import Ship from "./ship";
import Game from "./game";
export {UI}

const UI = (() => {

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

  const displayInfo = () => {
    const content = document.querySelector('.content')
    const bar = document.createElement('div');
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    p.classList.add('current-info')
    p2.classList.add('win-info')
    p.textContent = 'Good Luck!'
    bar.classList.add('info-bar')
    bar.appendChild(p)
    bar.appendChild(p2)
    content.appendChild(bar)

  }


return {drawPlayerGrid, drawComputerGrid, displayInfo}
})();