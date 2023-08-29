/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\nconst UI = (() => {\n  const newGame = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  const drawPlayerGrid = () => {\n    const playerBoard = document.querySelector('.player-box');\n    for (let i = 0; i < 100; i++) {\n      const newDiv = document.createElement('div');\n      newDiv.setAttribute('class', 'gridp ' + 'p' + i);\n      newDiv.setAttribute('ondrop', 'drop(event)');\n      newDiv.setAttribute('ondragover', 'allowDrop(event)');\n      playerBoard.appendChild(newDiv);\n    }\n  };\n  const drawComputerGrid = () => {\n    const computerBoard = document.querySelector('.computer-box');\n    for (let i = 0; i < 100; i++) {\n      const newDiv = document.createElement('div');\n      newDiv.setAttribute('class', 'grid ' + 'c' + i);\n      computerBoard.appendChild(newDiv);\n    }\n  };\n  const sendPlayerAttack = () => {\n    for (let i = 0; i < newGame.players[1].gameboard.board.length; i++) {\n      let elements = document.querySelectorAll('.c' + i);\n      elements.forEach(div => {\n        div.addEventListener('click', () => {\n          if (newGame.players[1].gameboard.board[i].isShot == true) {\n            newGame.players[1].playerAttack(i);\n            newGame.players[0].computerAttack();\n            setTimeout(function () {\n              UI.sendComputerAttack();\n            }, 500);\n            newGame.players[0].gameEnd();\n            newGame.players[1].gameEnd();\n            UI.gameLoop();\n            return console.log('You already shot here');\n          } else if (newGame.players[1].gameboard.board[i].isShot == false && newGame.players[1].gameboard.board[i].hasShip == false) {\n            div.style.backgroundColor = 'white';\n            newGame.players[1].playerAttack(i);\n            newGame.players[0].computerAttack();\n            setTimeout(function () {\n              UI.sendComputerAttack();\n            }, 500);\n            newGame.players[0].gameEnd();\n            newGame.players[1].gameEnd();\n            UI.gameLoop();\n            return console.log('Miss!', newGame);\n          } else if (newGame.players[1].gameboard.board[i].isShot == false && newGame.players[1].gameboard.board[i].hasShip == true) {\n            div.style.backgroundColor = 'red';\n            newGame.players[1].playerAttack(i);\n            newGame.players[0].computerAttack();\n            setTimeout(function () {\n              UI.sendComputerAttack();\n            }, 500);\n            newGame.players[0].gameEnd();\n            newGame.players[1].gameEnd();\n            UI.gameLoop();\n            return console.log('Hit!', newGame);\n          }\n        });\n      });\n    }\n  };\n  const sendComputerAttack = () => {\n    let elements = document.querySelectorAll('.gridp');\n    let myArray = Array.from(elements);\n    let target = Math.floor(Math.random() * 100);\n    if (newGame.players[0].gameboard.board[target].isShot == true) {\n      return console.log('computer already shot here');\n    } else if (newGame.players[0].gameboard.board[target].isShot == false && newGame.players[0].gameboard.board[target].hasShip == false) {\n      myArray[target].style.backgroundColor = 'white';\n    } else if (newGame.players[0].gameboard.board[target].isShot == false && newGame.players[0].gameboard.board[target].hasShip == true) {\n      myArray[target].style.backgroundColor = 'red';\n    }\n  };\n  const drawShips = () => {\n    for (let i = 0; i < newGame.players[0].gameboard.board.length; i++) {\n      if (newGame.players[0].gameboard.board[i].hasShip == true) {\n        let elements = document.querySelectorAll('.p' + i);\n        elements.forEach(div => {\n          div.style.backgroundColor = 'black';\n        });\n      }\n    }\n    for (let j = 0; j < newGame.players[1].gameboard.board.length; j++) {\n      if (newGame.players[1].gameboard.board[j].hasShip == true) {\n        let elements = document.querySelectorAll('.c' + j);\n        elements.forEach(div => {});\n      }\n    }\n  };\n  const gameLoop = () => {\n    if (newGame.players[0].gameOver == true) {\n      return console.log('Computer Wins!');\n    } else if (newGame.players[1].gameOver == true) {\n      return console.log('Player Wins!');\n    } else {\n      return;\n    }\n  };\n  return {\n    drawPlayerGrid,\n    drawComputerGrid,\n    sendPlayerAttack,\n    drawShips,\n    sendComputerAttack,\n    gameLoop\n  };\n})();\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nclass Game {\n  constructor() {\n    this.players = [];\n    if (!this.players.length) this.initGame();\n  }\n  initGame() {\n    let playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Player');\n    let playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Computer');\n    this.players.push(playerOne, playerTwo);\n    playerOne.gameboard.placeShips(0, 'h', 5, \"Carrier\");\n    playerOne.gameboard.placeShips(8, 'v', 4, \"Battleship\");\n    playerOne.gameboard.placeShips(54, 'h', 3, \"Destroyer\");\n    playerOne.gameboard.placeShips(74, 'h', 3, \"Submarine\");\n    playerOne.gameboard.placeShips(87, 'h', 2, \"Patrol Boat\");\n    playerTwo.gameboard.placeShips(21, 'h', 5, \"Carrier\");\n    playerTwo.gameboard.placeShips(8, 'v', 4, \"Battleship\");\n    playerTwo.gameboard.placeShips(51, 'h', 3, \"Destroyer\");\n    playerTwo.gameboard.placeShips(74, 'v', 3, \"Submarine\");\n    playerTwo.gameboard.placeShips(87, 'h', 2, \"Patrol Boat\");\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n// Creates gameboard object\n\n\nclass Gameboard {\n  constructor() {\n    this.board = [];\n    this.ships = [];\n    if (!this.board.length) this.init();\n  }\n  init() {\n    for (let i = 0; i < 100; i++) {\n      this.board.push({\n        hasShip: false,\n        isShot: false,\n        shipName: null\n      });\n    }\n  }\n  placeShips(pos1, direction, length, name) {\n    let ship = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length, name);\n    if (this.checkValidity(pos1) == true) {\n      this.ships.push(ship);\n    } else if (this.checkValidity(pos1) == false) {\n      return console.log(\"Cannot overlap\");\n    }\n    if (direction == \"h\") {\n      for (let i = 0; i < length; i++) {\n        this.board[pos1].hasShip = true;\n        this.board[pos1].shipName = ship.name;\n        pos1++;\n      }\n    } else if (direction == \"v\") {\n      for (let j = 0; j < length; j++) {\n        this.board[pos1].hasShip = true;\n        this.board[pos1].shipName = ship.name;\n        pos1 += 10;\n      }\n    }\n  }\n  checkValidity(location) {\n    for (let i = 0; i < this.board.length; i++) {\n      if (this.board[location].hasShip == true || this.board[location].hasShip == undefined) {\n        return false;\n      } else {\n        return true;\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals */ \"./src/modals.js\");\n\n\n\n\n\nlet newGame = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log(newGame);\n(0,_modals__WEBPACK_IMPORTED_MODULE_4__.gameStartModal)();\n// rotateButtonOne();\n// rotateButtonTwo();\n// rotateButtonThree();\n// rotateButtonFour();\n// rotateButtonFive();\n\n_UI__WEBPACK_IMPORTED_MODULE_1__.UI.drawPlayerGrid();\n_UI__WEBPACK_IMPORTED_MODULE_1__.UI.drawComputerGrid();\n_UI__WEBPACK_IMPORTED_MODULE_1__.UI.drawShips();\n_UI__WEBPACK_IMPORTED_MODULE_1__.UI.sendPlayerAttack();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameStartModal: () => (/* binding */ gameStartModal)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction gameStartModal() {\n  const content = document.querySelector('.content');\n  const newDiv = document.createElement('div');\n  const header = document.createElement('div');\n  const ships = document.createElement('div');\n  newDiv.classList.add('start-modal');\n  header.classList.add('modal-header');\n  ships.classList.add('ships');\n  header.innerHTML = 'Place your ships';\n  content.appendChild(newDiv);\n  newDiv.appendChild(header);\n  newDiv.appendChild(ships);\n  createCarrier();\n  createBattleship();\n  createDestroyer();\n  createSubmarine();\n  createPatrol();\n}\nfunction createCarrier() {\n  const ships = document.querySelector('.ships');\n  const carrier = document.createElement('div');\n  const rotate = document.createElement('button');\n  const buttonContainer = document.createElement('div');\n  rotate.classList.add('rotate');\n  carrier.classList.add('carrier');\n  carrier.setAttribute('draggable', 'true');\n  carrier.setAttribute('ondragstart', 'drag(event)');\n  carrier.setAttribute('id', 'drag1');\n  buttonContainer.classList.add('button-container');\n  rotate.innerHTML = 'R';\n  carrier.appendChild(buttonContainer);\n  buttonContainer.appendChild(rotate);\n  ships.appendChild(carrier);\n  let carrierLength = 5;\n  for (let i = 0; i < carrierLength; i++) {\n    let divs = document.createElement('div');\n    divs.classList.add('carrier' + i);\n    carrier.appendChild(divs);\n  }\n}\nfunction createBattleship() {\n  const ships = document.querySelector('.ships');\n  const battleship = document.createElement('div');\n  const rotate = document.createElement('button');\n  const buttonContainer = document.createElement('div');\n  rotate.classList.add('rotate-two');\n  battleship.classList.add('battleship');\n  buttonContainer.classList.add('button-container-two');\n  rotate.innerHTML = 'R';\n  battleship.appendChild(buttonContainer);\n  buttonContainer.appendChild(rotate);\n  ships.appendChild(battleship);\n  let battleshipLength = 4;\n  for (let i = 0; i < battleshipLength; i++) {\n    let divs = document.createElement('div');\n    divs.classList.add('battleship' + i);\n    battleship.appendChild(divs);\n  }\n}\nfunction createDestroyer() {\n  const ships = document.querySelector('.ships');\n  const destroyer = document.createElement('div');\n  const rotate = document.createElement('button');\n  const buttonContainer = document.createElement('div');\n  rotate.classList.add('rotate-three');\n  destroyer.classList.add('destroyer');\n  buttonContainer.classList.add('button-container-three');\n  rotate.innerHTML = 'R';\n  destroyer.appendChild(buttonContainer);\n  buttonContainer.appendChild(rotate);\n  ships.appendChild(destroyer);\n  let destroyerLength = 3;\n  for (let i = 0; i < destroyerLength; i++) {\n    let divs = document.createElement('div');\n    divs.classList.add('destroyer' + i);\n    destroyer.appendChild(divs);\n  }\n}\nfunction createSubmarine() {\n  const ships = document.querySelector('.ships');\n  const submarine = document.createElement('div');\n  const rotate = document.createElement('button');\n  const buttonContainer = document.createElement('div');\n  rotate.classList.add('rotate-four');\n  submarine.classList.add('submarine');\n  buttonContainer.classList.add('button-container-four');\n  rotate.innerHTML = 'R';\n  submarine.appendChild(buttonContainer);\n  buttonContainer.appendChild(rotate);\n  ships.appendChild(submarine);\n  let submarineLength = 3;\n  for (let i = 0; i < submarineLength; i++) {\n    let divs = document.createElement('div');\n    divs.classList.add('submarine' + i);\n    submarine.appendChild(divs);\n  }\n}\nfunction createPatrol() {\n  const ships = document.querySelector('.ships');\n  const patrol = document.createElement('div');\n  const rotate = document.createElement('button');\n  const buttonContainer = document.createElement('div');\n  rotate.classList.add('rotate-five');\n  patrol.classList.add('patrol');\n  buttonContainer.classList.add('button-container-five');\n  rotate.innerHTML = 'R';\n  patrol.appendChild(buttonContainer);\n  buttonContainer.appendChild(rotate);\n  ships.appendChild(patrol);\n  let patrolLength = 2;\n  for (let i = 0; i < patrolLength; i++) {\n    let divs = document.createElement('div');\n    divs.classList.add('patrol');\n    patrol.appendChild(divs);\n  }\n}\n\n// export function rotateButtonOne () {\n//   const rotate = document.querySelector('.rotate');\n//   const carrier = document.querySelector('.carrier')\n//   rotate.addEventListener('click', () => {\n//     if (carrier.classList.contains('carrier')) {\n//       carrier.classList.add('carrierTwo')\n//       carrier.classList.remove('carrier')\n//     } else {\n//       carrier.classList.add('carrier')\n//       carrier.classList.remove('carrierTwo')\n//     }\n//   })\n// }\n\n// export function rotateButtonTwo () {\n//   const rotate = document.querySelector('.rotate-two');\n//   const battleship = document.querySelector('.battleship')\n//   rotate.addEventListener('click', () => {\n//     if (battleship.classList.contains('battleship')) {\n//       battleship.classList.add('battleshipTwo')\n//       battleship.classList.remove('battleship')\n//     } else {\n//       battleship.classList.add('battleship')\n//       battleship.classList.remove('battleshipTwo')\n//     }\n//   })\n// }\n\n// export function rotateButtonThree () {\n//   const rotate = document.querySelector('.rotate-three');\n//   const destroyer = document.querySelector('.destroyer')\n//   rotate.addEventListener('click', () => {\n//     if (destroyer.classList.contains('destroyer')) {\n//       destroyer.classList.add('destroyerTwo')\n//       destroyer.classList.remove('destroyer')\n//     } else {\n//       destroyer.classList.add('destroyer')\n//       destroyer.classList.remove('destroyerTwo')\n//     }\n//   })\n// }\n\n// export function rotateButtonFour () {\n//   const rotate = document.querySelector('.rotate-four');\n//   const submarine = document.querySelector('.submarine')\n//   rotate.addEventListener('click', () => {\n//     if (submarine.classList.contains('submarine')) {\n//       submarine.classList.add('submarineTwo')\n//       submarine.classList.remove('submarine')\n//     } else {\n//       submarine.classList.add('submarine')\n//       submarine.classList.remove('submarineTwo')\n//     }\n//   })\n// }\n\n// export function rotateButtonFive () {\n//   const rotate = document.querySelector('.rotate-five');\n//   const patrol = document.querySelector('.patrol')\n//   rotate.addEventListener('click', () => {\n//     if (patrol.classList.contains('patrol')) {\n//       patrol.classList.add('patrolTwo')\n//       patrol.classList.remove('patrol')\n//     } else {\n//       patrol.classList.add('patrol')\n//       patrol.classList.remove('patrolTwo')\n//     }\n//   })\n// }\n\n//# sourceURL=webpack://battleship/./src/modals.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// Creates player object\n\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.gameOver = false;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([]);\n  }\n  // Write function for player attack\n  // Write function for random computer attack\n  playerAttack(location) {\n    if (this.gameboard.board[location].isShot == false && this.gameboard.board[location].hasShip == false) {\n      this.gameboard.board[location].isShot = true;\n      return;\n    } else if (this.gameboard.board[location].isShot == true) {\n      return;\n    } else if (this.gameboard.board[location].isShot == false && this.gameboard.board[location].hasShip == true) {\n      this.gameboard.board[location].isShot = true;\n      for (let i = 0; i < this.gameboard.ships.length; i++) {\n        if (this.gameboard.ships[i]['name'] == this.gameboard.board[location].shipName) {\n          this.gameboard.ships[i].hit(true);\n          this.gameboard.ships[i].isSunk();\n        }\n      }\n      return;\n    }\n  }\n  computerAttack() {\n    let target = Math.floor(Math.random() * 100);\n    if (this.gameboard.board[target].isShot == false && this.gameboard.board[target].hasShip == false) {\n      this.gameboard.board[target].isShot = true;\n      console.log('miss');\n    } else if (this.gameboard.board[target].isShot == true) {\n      console.log('already shot here');\n    } else if (this.gameboard.board[target].isShot == false && this.gameboard.board[target].hasShip == true) {\n      this.gameboard.board[target].isShot = true;\n      for (let i = 0; i < this.gameboard.ships.length; i++) {\n        if (this.gameboard.ships[i]['name'] == this.gameboard.board[target].shipName) {\n          this.gameboard.ships[i].hit(true);\n          this.gameboard.ships[i].isSunk();\n          console.log('hit');\n        }\n      }\n    }\n  }\n  gameEnd() {\n    for (let i = 0; i < this.gameboard.ships.length; i++) {\n      if (this.gameboard.ships[0].sunk == false && this.gameboard.ships[1].sunk == false && this.gameboard.ships[2].sunk == false && this.gameboard.ships[3].sunk == false && this.gameboard.ships[4].sunk == false) {\n        return;\n      } else if (this.gameboard.ships[0].sunk == true && this.gameboard.ships[1].sunk == true && this.gameboard.ships[2].sunk == true && this.gameboard.ships[3].sunk == true && this.gameboard.ships[4].sunk == true) {\n        this.gameOver = true;\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\n// Factory Function to create ships\n\nclass Ship {\n  constructor(length, name) {\n    this.length = length;\n    this.name = name;\n    this.hits = 0;\n    this.sunk = false;\n  }\n  hit(x) {\n    if (x == true) {\n      return this.hits++;\n    } else {\n      return console.log(\"Missed\");\n    }\n  }\n  isSunk() {\n    if (this.hits >= this.length) {\n      this.sunk = true;\n    } else if (this.hits < this.length) {\n      this.sunk = false;\n    }\n    return;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;