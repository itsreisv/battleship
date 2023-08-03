import Ship from "../src/ship";

test('Ship Factory hit', () => {
  let newShip = new Ship(4);
  newShip.hit(true);
  expect(newShip).toEqual({length:4, hits:1, sunk:false})
})

test('Ship Factory sunk', () => {
  let newShip = new Ship(4);
  newShip.hit(true);
  newShip.hit(true);
  newShip.hit(true);
  newShip.hit(true);
  newShip.isSunk();
  expect(newShip).toEqual({length:4, hits:4, sunk:true})
})
