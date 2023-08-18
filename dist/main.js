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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n// Creates gameboard object\n\n\nclass Gameboard {\n  constructor() {\n    this.board = [];\n    this.ships = [];\n    if (!this.board.length) this.init();\n  }\n  init() {\n    for (let i = 0; i < 100; i++) {\n      this.board.push({\n        hasShip: false,\n        isShot: false,\n        shipName: null\n      });\n    }\n  }\n  placeShips(pos1, direction, length, name) {\n    let ship = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length, name);\n    if (this.checkValidity(pos1) == true) {\n      this.ships.push(ship);\n    } else if (this.checkValidity(pos1) == false) {\n      return console.log(\"Cannot overlap\");\n    }\n    if (direction == \"h\") {\n      for (let i = 0; i < length; i++) {\n        this.board[pos1].hasShip = true;\n        this.board[pos1].shipName = ship.name;\n        pos1++;\n      }\n    } else if (direction == \"v\") {\n      for (let j = 0; j < length; j++) {\n        this.board[pos1].hasShip = true;\n        this.board[pos1].shipName = ship.name;\n        pos1 += 10;\n      }\n    }\n  }\n  checkValidity(location) {\n    for (let i = 0; i < this.board.length; i++) {\n      if (this.board[location].hasShip == true) {\n        return false;\n      } else {\n        return true;\n      }\n    }\n  }\n  recieveAttack(location) {\n    if (this.board[location] == undefined) {\n      return \"Invalid location\";\n    } else if (this.board[location].isShot == false && this.board[location].hasShip == false) {\n      this.board[location].isShot = true;\n      return \"Miss!\";\n    } else if (this.board[location].isShot == true) {\n      return \"Already attacked\";\n    } else if (this.board[location].isShot == false && this.board[location].hasShip == true) {\n      this.board[location].isShot = true;\n      for (let i = 0; i < this.ships.length; i++) {\n        if (this.ships[i]['name'] == this.board[location].shipName) {\n          this.ships[i].hit(true);\n          this.ships[i].isSunk();\n        }\n      }\n      return \"Hit!\";\n    }\n  }\n  computerAttack() {\n    let target = Math.floor(Math.random() * 100);\n    if (this.board[target].isShot == true) {\n      return;\n    }\n    return this.recieveAttack(target);\n  }\n  gameOver() {\n    for (let i = 0; i < this.ships.length; i++) {\n      if (this.ships[i].sunk == true) {\n        return \"Game Over\";\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\nlet playerOne = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Reis\");\nlet playerTwo = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Computer\");\nconsole.log(playerOne, playerTwo);\nplayerOne.gameboard.placeShips(5, 'v', 3, \"Patrol\");\nplayerOne.gameboard.recieveAttack(5);\nplayerOne.gameboard.recieveAttack(15);\nplayerOne.gameboard.recieveAttack(25);\nconsole.log(playerOne.gameboard.gameOver());\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// Creates player object\n\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.turn = null;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([]);\n  }\n  // Write function for player attack\n  // Write function for random computer attack\n  playerAttack() {\n    if (this.turn == false) {\n      this.turn = true;\n    } else if (this.turn == true) {\n      this.turn = false;\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\n// Factory Function to create ships\n\nclass Ship {\n  constructor(length, name) {\n    this.length = length;\n    this.name = name;\n    this.hits = 0;\n    this.sunk = false;\n  }\n  hit(x) {\n    if (x == true) {\n      return this.hits++;\n    } else {\n      return console.log(\"Missed\");\n    }\n  }\n  isSunk() {\n    if (this.hits >= this.length) {\n      this.sunk = true;\n    } else {\n      this.sunk = false;\n    }\n    return;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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