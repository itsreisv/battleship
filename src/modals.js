import { UI } from "./UI";
import Game from "./game";

export function gameStartModal() {
  const content = document.querySelector('.content');
  const newDiv = document.createElement('div');
  const header = document.createElement('div');
  const ships = document.createElement('div');
  const submit = document.createElement('button')
  submit.textContent = 'Submit'
  submit.classList.add('submit')
  ships.appendChild(submit)
  newDiv.classList.add('start-modal');
  header.classList.add('modal-header');
  ships.classList.add('ships')
  header.innerHTML = 'Place your ships'
  content.appendChild(newDiv)
  newDiv.appendChild(header)
  newDiv.appendChild(ships)
  createCarrier();
  createBattleship();
  createDestroyer();
  createSubmarine();
  createPatrol();
  createInstructions();
}

function createCarrier() {
  const ships = document.querySelector('.ships');
  const carrier = document.createElement('div');
  const inputDir = document.createElement('input')
  const inputNum = document.createElement('input')
  const inputDirTitle = document.createElement('h2')
  const inputNumTitle = document.createElement('h2')
  const info = document.createElement('div');
  inputDir.setAttribute('id', 'carrier-dir')
  inputNum.setAttribute('id', 'carrier-num')
  info.classList.add('info-carrier')
  inputDirTitle.textContent = 'Direction'
  inputNumTitle.textContent = 'Starting square'
  carrier.classList.add('carrier')
  info.appendChild(inputDirTitle)
  info.appendChild(inputDir)
  info.appendChild(inputNumTitle)
  info.appendChild(inputNum)
  carrier.appendChild(info)
  ships.appendChild(carrier)

  const visual = document.createElement('div')
  visual.classList.add('visual')
  carrier.appendChild(visual)
  for (let i = 0; i < 5; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('carrier-visual')
    visual.appendChild(newDiv)
  }

}

function createBattleship() {
  const ships = document.querySelector('.ships');
  const battleship = document.createElement('div');
  const inputDir = document.createElement('input')
  const inputNum = document.createElement('input')
  const inputDirTitle = document.createElement('h2')
  const inputNumTitle = document.createElement('h2')
  const info = document.createElement('div');
  inputDir.setAttribute('id', 'battleship-dir')
  inputNum.setAttribute('id', 'battleship-num')
  info.classList.add('info-battleship')
  inputDirTitle.textContent = 'Direction'
  inputNumTitle.textContent = 'Starting square'
  battleship.classList.add('battleship')
  info.appendChild(inputDirTitle)
  info.appendChild(inputDir)
  info.appendChild(inputNumTitle)
  info.appendChild(inputNum)
  battleship.appendChild(info)
  ships.appendChild(battleship)

  const visual = document.createElement('div')
  visual.classList.add('visual')
  battleship.appendChild(visual)
  for (let i = 0; i < 4; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('battleship-visual')
    visual.appendChild(newDiv)
  }
}

function createDestroyer() {
  const ships = document.querySelector('.ships');
  const destroyer = document.createElement('div');
  const inputDir = document.createElement('input')
  const inputNum = document.createElement('input')
  const inputDirTitle = document.createElement('h2')
  const inputNumTitle = document.createElement('h2')
  const info = document.createElement('div');
  inputDir.setAttribute('id', 'destroyer-dir')
  inputNum.setAttribute('id', 'destroyer-num')
  info.classList.add('info-destroyer')
  inputDirTitle.textContent = 'Direction'
  inputNumTitle.textContent = 'Starting square'
  destroyer.classList.add('destroyer')
  info.appendChild(inputDirTitle)
  info.appendChild(inputDir)
  info.appendChild(inputNumTitle)
  info.appendChild(inputNum)
  destroyer.appendChild(info)
  ships.appendChild(destroyer)

  const visual = document.createElement('div')
  visual.classList.add('visual')
  destroyer.appendChild(visual)
  for (let i = 0; i < 3; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('battleship-visual')
    visual.appendChild(newDiv)
  }
}

function createSubmarine() {
  const ships = document.querySelector('.ships');
  const submarine = document.createElement('div');
  const inputDir = document.createElement('input')
  const inputNum = document.createElement('input')
  const inputDirTitle = document.createElement('h2')
  const inputNumTitle = document.createElement('h2')
  const info = document.createElement('div');
  inputDir.setAttribute('id', 'submarine-dir')
  inputNum.setAttribute('id', 'submarine-num')
  info.classList.add('info-submarine')
  inputDirTitle.textContent = 'Direction'
  inputNumTitle.textContent = 'Starting square'
  submarine.classList.add('submarine')
  info.appendChild(inputDirTitle)
  info.appendChild(inputDir)
  info.appendChild(inputNumTitle)
  info.appendChild(inputNum)
  submarine.appendChild(info)
  ships.appendChild(submarine)

  const visual = document.createElement('div')
  visual.classList.add('visual')
  submarine.appendChild(visual)
  for (let i = 0; i < 3; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('destroyer-visual')
    visual.appendChild(newDiv)
  }
}

function createPatrol() {
  const ships = document.querySelector('.ships');
  const patrol = document.createElement('div');
  const inputDir = document.createElement('input')
  const inputNum = document.createElement('input')
  const inputDirTitle = document.createElement('h2')
  const inputNumTitle = document.createElement('h2')
  const info = document.createElement('div');
  inputDir.setAttribute('id', 'patrol-dir')
  inputNum.setAttribute('id', 'patrol-num')
  info.classList.add('info-patrol')
  inputDirTitle.textContent = 'Direction'
  inputNumTitle.textContent = 'Starting square'
  patrol.classList.add('patrol')
  info.appendChild(inputDirTitle)
  info.appendChild(inputDir)
  info.appendChild(inputNumTitle)
  info.appendChild(inputNum)
  patrol.appendChild(info)
  ships.appendChild(patrol)

  const visual = document.createElement('div')
  visual.classList.add('visual')
  patrol.appendChild(visual)
  for (let i = 0; i < 2; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('patrol-visual')
    visual.appendChild(newDiv)
  }
}

function createInstructions() {
  const ships = document.querySelector('.ships');
  const info = document.createElement('div')
  const p = document.createElement('p');
  const p2 = document.createElement('p')
  p.textContent = '1.Choose whether your ship will be oriented vertically or horizontally, use v or h'
  p2.textContent = '2. Choose which square your ship will start in, the grid counts 1-100'
  info.appendChild(p)
  info.appendChild(p2)
  info.classList.add('info')
  ships.appendChild(info)
}


