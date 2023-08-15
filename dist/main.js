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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n\nclass Gameboard {\n  constructor(board) {\n    this.board = [];\n    this.ships = [];\n    if (!this.board.length) this.init();\n  }\n  init() {\n    for (let i = 0; i < 100; i++) {\n      this.board.push({\n        hasShip: false,\n        isShot: false,\n        shipName: null\n      });\n    }\n  }\n  placeShips(pos1, direction, length, name) {\n    let ship = new _src_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length, name);\n    this.ships.push(ship);\n    if (direction == \"h\") {\n      for (let i = 0; i < length; i++) {\n        this.board[pos1].hasShip = true;\n        this.board[pos1].shipName = ship.name;\n        pos1++;\n      }\n    } else if (direction == \"v\") {\n      for (let j = 0; j < length; j++) {\n        this.board[pos1].hasShip = true;\n        this.board[pos1].shipName = ship.name;\n        pos1 += 10;\n      }\n    }\n  }\n  recieveAttack(location) {\n    if (this.board[location] == undefined) {\n      return \"Select a valid location\";\n    } else if (this.board[location].isShot == false && this.board[location].hasShip == false) {\n      this.board[location].isShot = true;\n      return \"You missed!\";\n    } else if (this.board[location].isShot == true) {\n      return \"You already shot here\";\n    } else if (this.board[location].isShot == false && this.board[location].hasShip == true) {\n      this.board[location].isShot = true;\n      for (let i = 0; i < this.ships.length; i++) {\n        if (this.ships[i]['name'] == this.board[location].shipName) {\n          this.ships[i].hit(true);\n          this.ships[i].isSunk();\n        }\n      }\n      return \"Hit!\";\n    }\n  }\n  gameOver() {\n    for (let i = 0; i < this.ships.length; i++) {\n      if (this.ships[i].sunk == true) {\n        return console.log(\"Game Over\");\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nlet newGame = new _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([]);\nnewGame.placeShips(5, \"v\", 3, \"Destroyer\");\nnewGame.placeShips(10, \"v\", 4, \"Cruiser\");\nnewGame.recieveAttack(5);\nnewGame.recieveAttack(15);\nnewGame.recieveAttack(25);\nnewGame.gameOver();\nconsole.log(newGame.ships[1]);\nconsole.log(newGame.ships[0]);\nconsole.log(newGame);\nconsole.log(newGame.ships[0]['name']);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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