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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\nconst UI = (() => {\n  const drawPlayerGrid = () => {\n    const playerBoard = document.querySelector('.player-box');\n    for (let i = 0; i < 100; i++) {\n      const newDiv = document.createElement('div');\n      newDiv.setAttribute('class', 'gridp ' + 'p' + i);\n      playerBoard.appendChild(newDiv);\n    }\n  };\n  const drawComputerGrid = () => {\n    const computerBoard = document.querySelector('.computer-box');\n    for (let i = 0; i < 100; i++) {\n      const newDiv = document.createElement('div');\n      newDiv.setAttribute('class', 'grid ' + 'c' + i);\n      computerBoard.appendChild(newDiv);\n    }\n  };\n  const displayInfo = () => {\n    const content = document.querySelector('.content');\n    const bar = document.createElement('div');\n    const p = document.createElement('p');\n    const p2 = document.createElement('p');\n    p.classList.add('current-info');\n    p2.classList.add('win-info');\n    p.textContent = 'Good Luck!';\n    bar.classList.add('info-bar');\n    bar.appendChild(p);\n    bar.appendChild(p2);\n    content.appendChild(bar);\n  };\n  return {\n    drawPlayerGrid,\n    drawComputerGrid,\n    displayInfo\n  };\n})();\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nclass Game {\n  constructor() {\n    this.players = [];\n    if (!this.players.length) this.initGame();\n  }\n  initGame() {\n    let playerOne = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Player');\n    let playerTwo = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Computer');\n    this.players.push(playerOne, playerTwo);\n    playerTwo.gameboard.placeShips(21, 'h', 5, \"Carrier\");\n    playerTwo.gameboard.placeShips(8, 'v', 4, \"Battleship\");\n    playerTwo.gameboard.placeShips(51, 'h', 3, \"Destroyer\");\n    playerTwo.gameboard.placeShips(74, 'v', 3, \"Submarine\");\n    playerTwo.gameboard.placeShips(87, 'h', 2, \"Patrol Boat\");\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/game.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals */ \"./src/modals.js\");\n\n\n\n\n\nlet newGame = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log(newGame);\n_UI__WEBPACK_IMPORTED_MODULE_1__.UI.drawPlayerGrid();\n_UI__WEBPACK_IMPORTED_MODULE_1__.UI.drawComputerGrid();\n_UI__WEBPACK_IMPORTED_MODULE_1__.UI.displayInfo();\n(0,_modals__WEBPACK_IMPORTED_MODULE_4__.gameStartModal)();\nsubmitButton();\nfunction submitButton() {\n  const submit = document.querySelector('.submit');\n  const modal = document.querySelector('.start-modal');\n  const carrierDir = document.querySelector('#carrier-dir');\n  const carrierNum = document.querySelector('#carrier-num');\n  const battleshipDir = document.querySelector('#battleship-dir');\n  const battleshipNum = document.querySelector('#battleship-num');\n  const destroyerDir = document.querySelector('#destroyer-dir');\n  const destroyerNum = document.querySelector('#destroyer-num');\n  const submarineDir = document.querySelector('#submarine-dir');\n  const submarineNum = document.querySelector('#submarine-num');\n  const patrolDir = document.querySelector('#patrol-dir');\n  const patrolNum = document.querySelector('#patrol-num');\n  submit.addEventListener('click', () => {\n    newGame.players[0].gameboard.placeShips(parseInt(carrierNum.value), carrierDir.value, 5, 'Carrier');\n    newGame.players[0].gameboard.placeShips(parseInt(battleshipNum.value), battleshipDir.value, 4, 'Battleship');\n    newGame.players[0].gameboard.placeShips(parseInt(destroyerNum.value), destroyerDir.value, 3, 'Destroyer');\n    newGame.players[0].gameboard.placeShips(parseInt(submarineNum.value), submarineDir.value, 3, 'Submarine');\n    newGame.players[0].gameboard.placeShips(parseInt(patrolNum.value), patrolDir.value, 2, 'Patrol');\n    drawShips();\n    modal.remove();\n  });\n}\nconst drawShips = () => {\n  for (let i = 0; i < newGame.players[0].gameboard.board.length; i++) {\n    if (newGame.players[0].gameboard.board[i].hasShip == true) {\n      let elements = document.querySelectorAll('.p' + i);\n      elements.forEach(div => {\n        div.style.backgroundColor = 'black';\n      });\n    }\n  }\n};\nconst sendPlayerAttack = () => {\n  const info = document.querySelector('.current-info');\n  for (let i = 0; i < newGame.players[1].gameboard.board.length; i++) {\n    let elements = document.querySelectorAll('.c' + i);\n    elements.forEach(div => {\n      div.addEventListener('click', () => {\n        if (newGame.players[1].gameboard.board[i].isShot == true) {\n          newGame.players[1].playerAttack(i);\n          newGame.players[0].computerAttack();\n          setTimeout(function () {\n            sendComputerAttack();\n          }, 250);\n          newGame.players[0].gameEnd();\n          newGame.players[1].gameEnd();\n          gameLoop();\n          info.textContent = 'You already shot here';\n          return console.log('You already shot here');\n        } else if (newGame.players[1].gameboard.board[i].isShot == false && newGame.players[1].gameboard.board[i].hasShip == false) {\n          div.style.backgroundColor = 'white';\n          newGame.players[1].playerAttack(i);\n          newGame.players[0].computerAttack();\n          setTimeout(function () {\n            sendComputerAttack();\n          }, 250);\n          newGame.players[0].gameEnd();\n          newGame.players[1].gameEnd();\n          gameLoop();\n          info.textContent = 'Miss!';\n          return console.log('Miss!', newGame);\n        } else if (newGame.players[1].gameboard.board[i].isShot == false && newGame.players[1].gameboard.board[i].hasShip == true) {\n          div.style.backgroundColor = 'red';\n          newGame.players[1].playerAttack(i);\n          newGame.players[0].computerAttack();\n          setTimeout(function () {\n            sendComputerAttack();\n          }, 250);\n          newGame.players[0].gameEnd();\n          newGame.players[1].gameEnd();\n          gameLoop();\n          info.textContent = 'Hit!';\n          return console.log('Hit!', newGame);\n        }\n      });\n    });\n  }\n};\nconst sendComputerAttack = () => {\n  let elements = document.querySelectorAll('.gridp');\n  let myArray = Array.from(elements);\n  let target = Math.floor(Math.random() * 100);\n  if (newGame.players[0].gameboard.board[target].isShot == true) {\n    sendComputerAttack();\n  } else if (newGame.players[0].gameboard.board[target].isShot == false && newGame.players[0].gameboard.board[target].hasShip == false) {\n    myArray[target].style.backgroundColor = 'white';\n  } else if (newGame.players[0].gameboard.board[target].isShot == false && newGame.players[0].gameboard.board[target].hasShip == true) {\n    myArray[target].style.backgroundColor = 'red';\n  }\n};\nconst gameLoop = () => {\n  const p = document.querySelector('.win-info');\n  if (newGame.players[0].gameOver == true) {\n    p.textContent = ' Computer Wins!';\n    return;\n  } else if (newGame.players[1].gameOver == true) {\n    p.textContent = ' Player Wins!';\n    return;\n  } else {\n    return;\n  }\n};\nsendPlayerAttack();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameStartModal: () => (/* binding */ gameStartModal)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nfunction gameStartModal() {\n  const content = document.querySelector('.content');\n  const newDiv = document.createElement('div');\n  const header = document.createElement('div');\n  const ships = document.createElement('div');\n  const submit = document.createElement('button');\n  submit.textContent = 'Submit';\n  submit.classList.add('submit');\n  ships.appendChild(submit);\n  newDiv.classList.add('start-modal');\n  header.classList.add('modal-header');\n  ships.classList.add('ships');\n  header.innerHTML = 'Place your ships';\n  content.appendChild(newDiv);\n  newDiv.appendChild(header);\n  newDiv.appendChild(ships);\n  createCarrier();\n  createBattleship();\n  createDestroyer();\n  createSubmarine();\n  createPatrol();\n  createInstructions();\n}\nfunction createCarrier() {\n  const ships = document.querySelector('.ships');\n  const carrier = document.createElement('div');\n  const inputDir = document.createElement('input');\n  const inputNum = document.createElement('input');\n  const inputDirTitle = document.createElement('h2');\n  const inputNumTitle = document.createElement('h2');\n  const info = document.createElement('div');\n  inputDir.setAttribute('id', 'carrier-dir');\n  inputNum.setAttribute('id', 'carrier-num');\n  info.classList.add('info-carrier');\n  inputDirTitle.textContent = 'Direction';\n  inputNumTitle.textContent = 'Starting square';\n  carrier.classList.add('carrier');\n  info.appendChild(inputDirTitle);\n  info.appendChild(inputDir);\n  info.appendChild(inputNumTitle);\n  info.appendChild(inputNum);\n  carrier.appendChild(info);\n  ships.appendChild(carrier);\n  const visual = document.createElement('div');\n  visual.classList.add('visual');\n  carrier.appendChild(visual);\n  for (let i = 0; i < 5; i++) {\n    const newDiv = document.createElement('div');\n    newDiv.classList.add('carrier-visual');\n    visual.appendChild(newDiv);\n  }\n}\nfunction createBattleship() {\n  const ships = document.querySelector('.ships');\n  const battleship = document.createElement('div');\n  const inputDir = document.createElement('input');\n  const inputNum = document.createElement('input');\n  const inputDirTitle = document.createElement('h2');\n  const inputNumTitle = document.createElement('h2');\n  const info = document.createElement('div');\n  inputDir.setAttribute('id', 'battleship-dir');\n  inputNum.setAttribute('id', 'battleship-num');\n  info.classList.add('info-battleship');\n  inputDirTitle.textContent = 'Direction';\n  inputNumTitle.textContent = 'Starting square';\n  battleship.classList.add('battleship');\n  info.appendChild(inputDirTitle);\n  info.appendChild(inputDir);\n  info.appendChild(inputNumTitle);\n  info.appendChild(inputNum);\n  battleship.appendChild(info);\n  ships.appendChild(battleship);\n  const visual = document.createElement('div');\n  visual.classList.add('visual');\n  battleship.appendChild(visual);\n  for (let i = 0; i < 4; i++) {\n    const newDiv = document.createElement('div');\n    newDiv.classList.add('battleship-visual');\n    visual.appendChild(newDiv);\n  }\n}\nfunction createDestroyer() {\n  const ships = document.querySelector('.ships');\n  const destroyer = document.createElement('div');\n  const inputDir = document.createElement('input');\n  const inputNum = document.createElement('input');\n  const inputDirTitle = document.createElement('h2');\n  const inputNumTitle = document.createElement('h2');\n  const info = document.createElement('div');\n  inputDir.setAttribute('id', 'destroyer-dir');\n  inputNum.setAttribute('id', 'destroyer-num');\n  info.classList.add('info-destroyer');\n  inputDirTitle.textContent = 'Direction';\n  inputNumTitle.textContent = 'Starting square';\n  destroyer.classList.add('destroyer');\n  info.appendChild(inputDirTitle);\n  info.appendChild(inputDir);\n  info.appendChild(inputNumTitle);\n  info.appendChild(inputNum);\n  destroyer.appendChild(info);\n  ships.appendChild(destroyer);\n  const visual = document.createElement('div');\n  visual.classList.add('visual');\n  destroyer.appendChild(visual);\n  for (let i = 0; i < 3; i++) {\n    const newDiv = document.createElement('div');\n    newDiv.classList.add('battleship-visual');\n    visual.appendChild(newDiv);\n  }\n}\nfunction createSubmarine() {\n  const ships = document.querySelector('.ships');\n  const submarine = document.createElement('div');\n  const inputDir = document.createElement('input');\n  const inputNum = document.createElement('input');\n  const inputDirTitle = document.createElement('h2');\n  const inputNumTitle = document.createElement('h2');\n  const info = document.createElement('div');\n  inputDir.setAttribute('id', 'submarine-dir');\n  inputNum.setAttribute('id', 'submarine-num');\n  info.classList.add('info-submarine');\n  inputDirTitle.textContent = 'Direction';\n  inputNumTitle.textContent = 'Starting square';\n  submarine.classList.add('submarine');\n  info.appendChild(inputDirTitle);\n  info.appendChild(inputDir);\n  info.appendChild(inputNumTitle);\n  info.appendChild(inputNum);\n  submarine.appendChild(info);\n  ships.appendChild(submarine);\n  const visual = document.createElement('div');\n  visual.classList.add('visual');\n  submarine.appendChild(visual);\n  for (let i = 0; i < 3; i++) {\n    const newDiv = document.createElement('div');\n    newDiv.classList.add('destroyer-visual');\n    visual.appendChild(newDiv);\n  }\n}\nfunction createPatrol() {\n  const ships = document.querySelector('.ships');\n  const patrol = document.createElement('div');\n  const inputDir = document.createElement('input');\n  const inputNum = document.createElement('input');\n  const inputDirTitle = document.createElement('h2');\n  const inputNumTitle = document.createElement('h2');\n  const info = document.createElement('div');\n  inputDir.setAttribute('id', 'patrol-dir');\n  inputNum.setAttribute('id', 'patrol-num');\n  info.classList.add('info-patrol');\n  inputDirTitle.textContent = 'Direction';\n  inputNumTitle.textContent = 'Starting square';\n  patrol.classList.add('patrol');\n  info.appendChild(inputDirTitle);\n  info.appendChild(inputDir);\n  info.appendChild(inputNumTitle);\n  info.appendChild(inputNum);\n  patrol.appendChild(info);\n  ships.appendChild(patrol);\n  const visual = document.createElement('div');\n  visual.classList.add('visual');\n  patrol.appendChild(visual);\n  for (let i = 0; i < 2; i++) {\n    const newDiv = document.createElement('div');\n    newDiv.classList.add('patrol-visual');\n    visual.appendChild(newDiv);\n  }\n}\nfunction createInstructions() {\n  const ships = document.querySelector('.ships');\n  const info = document.createElement('div');\n  const p = document.createElement('p');\n  const p2 = document.createElement('p');\n  p.textContent = '1.Choose whether your ship will be oriented vertically or horizontally, use v or h';\n  p2.textContent = '2. Choose which square your ship will start in, the grid counts 1-100';\n  info.appendChild(p);\n  info.appendChild(p2);\n  info.classList.add('info');\n  ships.appendChild(info);\n}\n\n//# sourceURL=webpack://battleship/./src/modals.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// Creates player object\n\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.gameOver = false;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([]);\n  }\n  // Write function for player attack\n  // Write function for random computer attack\n  playerAttack(location) {\n    if (this.gameboard.board[location].isShot == false && this.gameboard.board[location].hasShip == false) {\n      this.gameboard.board[location].isShot = true;\n      return;\n    } else if (this.gameboard.board[location].isShot == true) {\n      return;\n    } else if (this.gameboard.board[location].isShot == false && this.gameboard.board[location].hasShip == true) {\n      this.gameboard.board[location].isShot = true;\n      for (let i = 0; i < this.gameboard.ships.length; i++) {\n        if (this.gameboard.ships[i]['name'] == this.gameboard.board[location].shipName) {\n          this.gameboard.ships[i].hit(true);\n          this.gameboard.ships[i].isSunk();\n        }\n      }\n      return;\n    }\n  }\n  computerAttack() {\n    let target = Math.floor(Math.random() * 100);\n    if (this.gameboard.board[target].isShot == false && this.gameboard.board[target].hasShip == false) {\n      this.gameboard.board[target].isShot = true;\n    } else if (this.gameboard.board[target].isShot == true) {} else if (this.gameboard.board[target].isShot == false && this.gameboard.board[target].hasShip == true) {\n      this.gameboard.board[target].isShot = true;\n      for (let i = 0; i < this.gameboard.ships.length; i++) {\n        if (this.gameboard.ships[i]['name'] == this.gameboard.board[target].shipName) {\n          this.gameboard.ships[i].hit(true);\n          this.gameboard.ships[i].isSunk();\n        }\n      }\n    }\n  }\n  gameEnd() {\n    for (let i = 0; i < this.gameboard.ships.length; i++) {\n      if (this.gameboard.ships[0].sunk == false && this.gameboard.ships[1].sunk == false && this.gameboard.ships[2].sunk == false && this.gameboard.ships[3].sunk == false && this.gameboard.ships[4].sunk == false) {\n        return;\n      } else if (this.gameboard.ships[0].sunk == true && this.gameboard.ships[1].sunk == true && this.gameboard.ships[2].sunk == true && this.gameboard.ships[3].sunk == true && this.gameboard.ships[4].sunk == true) {\n        this.gameOver = true;\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\n// Factory Function to create ships\n\nclass Ship {\n  constructor(length, name) {\n    this.length = length;\n    this.name = name;\n    this.hits = 0;\n    this.sunk = false;\n  }\n  hit(x) {\n    if (x == true) {\n      return this.hits++;\n    } else {\n      return;\n    }\n  }\n  isSunk() {\n    if (this.hits >= this.length) {\n      this.sunk = true;\n    } else if (this.hits < this.length) {\n      this.sunk = false;\n    }\n    return;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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