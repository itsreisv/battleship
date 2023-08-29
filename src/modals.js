import Game from "./game";

export function gameStartModal() {
  const content = document.querySelector('.content');
  const newDiv = document.createElement('div');
  const header = document.createElement('div');
  const ships = document.createElement('div');
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
}

function createCarrier() {
  const ships = document.querySelector('.ships');
  const carrier = document.createElement('div');
  const rotate = document.createElement('button')
  const buttonContainer = document.createElement('div')
  rotate.classList.add('rotate')
  carrier.classList.add('carrier')
  carrier.setAttribute('draggable', 'true');
  carrier.setAttribute('ondragstart', 'drag(event)')
  carrier.setAttribute('id', 'drag1')
  buttonContainer.classList.add('button-container')
  rotate.innerHTML = 'R';
  carrier.appendChild(buttonContainer)
  buttonContainer.appendChild(rotate)
  ships.appendChild(carrier)
  let carrierLength = 5;
  for (let i = 0; i < carrierLength; i++) {
    let divs = document.createElement('div')
    divs.classList.add('carrier'+i)
    carrier.appendChild(divs)
  }
}

function createBattleship() {
  const ships = document.querySelector('.ships');
  const battleship = document.createElement('div');
  const rotate = document.createElement('button')
  const buttonContainer = document.createElement('div')
  rotate.classList.add('rotate-two')
  battleship.classList.add('battleship')
  buttonContainer.classList.add('button-container-two')
  rotate.innerHTML = 'R';
  battleship.appendChild(buttonContainer)
  buttonContainer.appendChild(rotate)
  ships.appendChild(battleship)
  let battleshipLength = 4;
  for (let i = 0; i < battleshipLength; i++) {
    let divs = document.createElement('div')
    divs.classList.add('battleship'+i)
    battleship.appendChild(divs)
  }
}

function createDestroyer() {
  const ships = document.querySelector('.ships');
  const destroyer = document.createElement('div');
  const rotate = document.createElement('button')
  const buttonContainer = document.createElement('div')
  rotate.classList.add('rotate-three')
  destroyer.classList.add('destroyer')
  buttonContainer.classList.add('button-container-three')
  rotate.innerHTML = 'R';
  destroyer.appendChild(buttonContainer)
  buttonContainer.appendChild(rotate)
  ships.appendChild(destroyer)
  let destroyerLength = 3;
  for (let i = 0; i < destroyerLength; i++) {
    let divs = document.createElement('div')
    divs.classList.add('destroyer'+i)
    destroyer.appendChild(divs)
  }
}

function createSubmarine() {
  const ships = document.querySelector('.ships');
  const submarine = document.createElement('div');
  const rotate = document.createElement('button')
  const buttonContainer = document.createElement('div')
  rotate.classList.add('rotate-four')
  submarine.classList.add('submarine')
  buttonContainer.classList.add('button-container-four')
  rotate.innerHTML = 'R';
  submarine.appendChild(buttonContainer)
  buttonContainer.appendChild(rotate)
  ships.appendChild(submarine)
  let submarineLength = 3;
  for (let i = 0; i < submarineLength; i++) {
    let divs = document.createElement('div')
    divs.classList.add('submarine'+i)
    submarine.appendChild(divs)
  }
}

function createPatrol() {
  const ships = document.querySelector('.ships');
  const patrol = document.createElement('div');
  const rotate = document.createElement('button')
  const buttonContainer = document.createElement('div')
  rotate.classList.add('rotate-five')
  patrol.classList.add('patrol')
  buttonContainer.classList.add('button-container-five')
  rotate.innerHTML = 'R';
  patrol.appendChild(buttonContainer)
  buttonContainer.appendChild(rotate)
  ships.appendChild(patrol)
  let patrolLength = 2;
  for (let i = 0; i < patrolLength; i++) {
    let divs = document.createElement('div')
    divs.classList.add('patrol')
    patrol.appendChild(divs)
  }
}

// export function rotateButtonOne () {
//   const rotate = document.querySelector('.rotate');
//   const carrier = document.querySelector('.carrier')
//   rotate.addEventListener('click', () => {
//     if (carrier.classList.contains('carrier')) {
//       carrier.classList.add('carrierTwo')
//       carrier.classList.remove('carrier')
//     } else {
//       carrier.classList.add('carrier')
//       carrier.classList.remove('carrierTwo')
//     }
//   })
// }

// export function rotateButtonTwo () {
//   const rotate = document.querySelector('.rotate-two');
//   const battleship = document.querySelector('.battleship')
//   rotate.addEventListener('click', () => {
//     if (battleship.classList.contains('battleship')) {
//       battleship.classList.add('battleshipTwo')
//       battleship.classList.remove('battleship')
//     } else {
//       battleship.classList.add('battleship')
//       battleship.classList.remove('battleshipTwo')
//     }
//   })
// }

// export function rotateButtonThree () {
//   const rotate = document.querySelector('.rotate-three');
//   const destroyer = document.querySelector('.destroyer')
//   rotate.addEventListener('click', () => {
//     if (destroyer.classList.contains('destroyer')) {
//       destroyer.classList.add('destroyerTwo')
//       destroyer.classList.remove('destroyer')
//     } else {
//       destroyer.classList.add('destroyer')
//       destroyer.classList.remove('destroyerTwo')
//     }
//   })
// }

// export function rotateButtonFour () {
//   const rotate = document.querySelector('.rotate-four');
//   const submarine = document.querySelector('.submarine')
//   rotate.addEventListener('click', () => {
//     if (submarine.classList.contains('submarine')) {
//       submarine.classList.add('submarineTwo')
//       submarine.classList.remove('submarine')
//     } else {
//       submarine.classList.add('submarine')
//       submarine.classList.remove('submarineTwo')
//     }
//   })
// }

// export function rotateButtonFive () {
//   const rotate = document.querySelector('.rotate-five');
//   const patrol = document.querySelector('.patrol')
//   rotate.addEventListener('click', () => {
//     if (patrol.classList.contains('patrol')) {
//       patrol.classList.add('patrolTwo')
//       patrol.classList.remove('patrol')
//     } else {
//       patrol.classList.add('patrol')
//       patrol.classList.remove('patrolTwo')
//     }
//   })
// }