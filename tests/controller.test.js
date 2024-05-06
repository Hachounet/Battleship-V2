import Controller from '../src/Controller';
/**
 * @jest-environment jsdom
 */
const newController = new Controller();

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('receiveAttackPos should return result ', () => {
  const pos = 'A1';
  const mockReceiveAttackPos = jest.fn();
  mockReceiveAttackPos.mockReturnValue('SUNK');

  newController.receiveAttackPos = mockReceiveAttackPos;

  newController.player2.Gameboard.placeShip('A1', 1);
  expect(newController.receiveAttackPos(pos)).toBe('SUNK');
});
