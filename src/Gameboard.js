/* eslint-disable no-prototype-builtins */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import Ships from './Ships';
import {
  generateDirection,
  generateLength,
  generateRandomMove,
} from './Randomize-Helper';

export default class Gameboard {
  constructor(missedLogs = new Set(), shipsLogs = []) {
    this.missedLogs = missedLogs;
    this.shipsLogs = shipsLogs;
    this.adjacencyList = {};
    this.populateGraph();
    this.populateEdge();
    this.randomizedShips();
  }

  randomizedShips() {
    const arrayOfLength = [2, 2, 3, 3, 3, 3, 4, 4, 6];

    while (arrayOfLength.length !== 0) {
      const randomPlacement = generateRandomMove();
      const randomDirection = generateDirection();
      const randomLength = generateLength(arrayOfLength);

      if (randomDirection === 'col') {
        const result = this.checkColPosForRandomPlacements(
          randomPlacement,
          randomLength
        );

        if (result === true) {
          this.placeShip(randomPlacement, randomLength, 'col');
          const index = arrayOfLength.indexOf(randomLength);
          arrayOfLength.splice(index, 1);
        }
      }
      if (randomDirection === 'row') {
        const result = this.checkRowPosForRandomPlacements(
          randomPlacement,
          randomLength
        );

        if (result === true) {
          this.placeShip(randomPlacement, randomLength, 'row');
          const index = arrayOfLength.indexOf(randomLength);
          arrayOfLength.splice(index, 1);
        }
      }
    }
  }

  checkRowPosForRandomPlacements(randomPlacement, randomLength) {
    const col = randomPlacement.slice(0, 1);
    const colCharCode = col.charCodeAt(0);
    const row = randomPlacement.slice(1);

    const arrayOfTruth = [];
    let counter = 0;
    while (counter !== randomLength) {
      if (
        this.adjacencyList.hasOwnProperty(
          String.fromCharCode(colCharCode)
            .concat(Number(row) + counter)
            .toString()
        ) &&
        this.adjacencyList[
          String.fromCharCode(colCharCode)
            .concat(Number(row) + counter)
            .toString()
        ].slot === null
      ) {
        arrayOfTruth.push(true);
      } else {
        arrayOfTruth.push(false);
      }

      counter += 1;
    }

    const checker = (arr) => arr.every((v) => v === true);

    return checker(arrayOfTruth);
  }

  checkColPosForRandomPlacements(randomPlacement, randomLength) {
    const col = randomPlacement.slice(0, 1);
    const colCharCode = col.charCodeAt(0);
    const row = randomPlacement.slice(1);

    const arrayOfTruth = [];
    let counter = 0;
    while (counter !== randomLength) {
      if (
        this.adjacencyList.hasOwnProperty(
          String.fromCharCode(colCharCode + counter).concat(row)
        ) &&
        this.adjacencyList[
          String.fromCharCode(colCharCode + counter).concat(row)
        ].slot === null
      ) {
        arrayOfTruth.push(true);
      } else {
        arrayOfTruth.push(false);
      }

      counter += 1;
    }

    const checker = (arr) => arr.every((v) => v === true);

    return checker(arrayOfTruth);
  }

  placeShip(coord, length, rowOrCol) {
    const newShip = new Ships(length, 0);
    const colStr = coord.slice(0, 1);
    const rowStr = coord.slice(1);

    if (length > 1) {
      if (rowOrCol === 'row') {
        for (let i = length - 1; i > 0; i -= 1) {
          if (
            this.adjacencyList[
              colStr.concat(Number(Number(rowStr) + i).toString())
            ] === undefined
          ) {
            throw new Error('Cannot be outer bounds');
          } else {
            this.adjacencyList[
              colStr.concat(Number(Number(rowStr) + i).toString())
            ].slot = newShip;
          }
        }
      }
      if (rowOrCol === 'col') {
        for (let i = length - 1; i > 0; i -= 1) {
          if (
            this.adjacencyList[
              String.fromCharCode(colStr.charCodeAt() + i).concat(
                rowStr.toString()
              )
            ] === undefined
          ) {
            throw new Error('Invalid position, cannot be outer bounds.');
          } else {
            this.adjacencyList[
              String.fromCharCode(colStr.charCodeAt() + i).concat(
                rowStr.toString()
              )
            ].slot = newShip;
          }
        }
      }
    }
    this.adjacencyList[coord].slot = newShip;
    this.shipsLogs.push(newShip);
  }

  receiveAttack(coord) {
    // Need to redo tests for this function
    let result;
    if (this.adjacencyList[coord].slot === null) {
      this.missedLogs.add(coord);
      result = false;
      this.adjacencyList[coord].status = 'Wtouched';
      return result;
    }
    if (this.adjacencyList[coord].status === 'Wtouched') {
      result = false;
      return result;
    }
    if (this.adjacencyList[coord].slot.sunkFn()) {
      result = true;

      return result;
    }
    if (this.adjacencyList[coord].status === 'Stouched') {
      result = false;
      return result;
    }

    this.adjacencyList[coord].slot.hitFn();
    this.adjacencyList[coord].status = 'Stouched';

    if (
      this.adjacencyList[coord].slot !== null &&
      this.adjacencyList[coord].slot.sunkFn() === true
    ) {
      const shipIndex = this.shipsLogs.findIndex((item) => item.sunk === true);
      this.shipsLogs.splice(shipIndex, 1);

      result = 'SUNK';
      return result;
    }

    result = true;
    return result;
  }

  allSunk() {
    let result = false;
    if (this.shipsLogs.length === 0) {
      result = true;
      return result;
    }
    return result;
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {
        neighbors: new Set(),
        slot: null,
        status: null,
      };
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      return "This vertex1 doesn't exists";
    }
    if (!this.adjacencyList[vertex2]) {
      return "This vertex2 doesn't exists";
    }
    this.adjacencyList[vertex1].neighbors.add(vertex2);
    this.adjacencyList[vertex2].neighbors.add(vertex1);
    return true;
  }

  populateGraph() {
    for (let i = 65; i < 75; i += 1) {
      for (let j = 1; j < 11; j += 1) {
        const toLetter = String.fromCharCode(i);
        const concat = toLetter.concat(j.toString());
        this.addVertex(concat);
      }
    }
  }

  populateEdge() {
    const array = Object.keys(this.adjacencyList);
    array.forEach((key) => {
      const colStr = key.slice(0, 1);
      const rowStr = key.slice(1);

      const nextCol = String.fromCharCode(colStr.charCodeAt() + 1);
      const nextRow = (Number(rowStr) + 1).toString();

      const concatNextCol = nextCol.concat(rowStr);
      const concatNextRow = colStr.concat(nextRow);

      this.addEdge(key, concatNextCol);
      this.addEdge(key, concatNextRow);
    });
  }
}
