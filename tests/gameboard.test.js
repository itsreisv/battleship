import Gameboard from "../src/gameboard";

test('test init', () => {
  let newGame = new Gameboard([]);
  newGame.init();
  expect(newGame.board[0]).toEqual({hasShip: false, isShot: false, shipName: null});
  expect(newGame.board[50]).toEqual({hasShip: false, isShot: false, shipName: null});
  expect(newGame.board[99]).toEqual({hasShip: false, isShot: false, shipName: null});
})

test('Placing ships', () => {
  let newGame = new Gameboard([]);
  newGame.init();
  newGame.placeShips(5, 'v', 3, "Destroyer");
  expect(newGame.board[5]).toEqual({hasShip: true, isShot: false, shipName: 'Destroyer'});
  expect(newGame.board[15]).toEqual({hasShip: true, isShot: false, shipName: 'Destroyer'});
  expect(newGame.board[25]).toEqual({hasShip: true, isShot: false, shipName: 'Destroyer'});
})

test('Recieve Attack', () => {
  let newGame = new Gameboard([]);
  newGame.init();
  newGame.placeShips(5, 'v', 3, "Destroyer");
  newGame.recieveAttack(5);
  newGame.recieveAttack(15);
  newGame.recieveAttack(25);
  expect(newGame.board[5]).toEqual({hasShip: true, isShot: true, shipName: 'Destroyer'});
  expect(newGame.board[15]).toEqual({hasShip: true, isShot: true, shipName: 'Destroyer'});
  expect(newGame.board[25]).toEqual({hasShip: true, isShot: true, shipName: 'Destroyer'});
  expect(newGame.ships[0]).toEqual({hits: 3, length: 3, name: 'Destroyer', sunk: true});
})
