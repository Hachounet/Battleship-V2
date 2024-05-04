/* eslint-disable class-methods-use-this */

import { generateRandomMove } from './Randomize-Helper';

export default class AI {
  constructor(queue = []) {
    this.allLogs = new Set();
    this.queue = queue;
    this.lastMove = null;
    this.lastResult = false;
  }

  play(choice, queuecoord) {
    // If choice is true do Random else use queuecoord
    let coord = 0;
    if (choice === true) {
      coord = generateRandomMove();

      while (this.allLogs.has(coord)) {
        coord = generateRandomMove();
      }

      this.allLogs.add(coord);
      this.lastMove = coord;
      return coord;
    }
    if (choice === false) {
      this.allLogs.add(queuecoord);
      this.lastMove = queuecoord;
      coord = queuecoord;
      return coord;
    }
    return coord;
  }

  logic(data) {
    let result = 0;
    if (this.lastResult === false && this.queue.length === 0) {
      result = this.play(true);
      return result;
    }

    if (this.lastResult === true && this.queue.length === 0) {
      data[this.lastMove].neighbors.forEach((neighbor) => {
        if (this.allLogs.has(neighbor)) {
          return;
        }
        this.queue.push(neighbor);
      });
      // choose correct cell and launch play
      const shiftedEl = this.queue.shift();
      result = this.play(false, shiftedEl);
      return result;
    }
    if (this.lastResult === false && this.queue.length !== 0) {
      const shiftedEl = this.queue.shift();
      result = this.play(false, shiftedEl);
      return result;
    }
    if (this.lastResult === true && this.queue.length !== 0) {
      const shiftedEl = this.queue.shift();
      data[this.lastMove].neighbors.forEach((neighbor) => {
        if (this.allLogs.has(neighbor)) {
          return;
        }
        this.queue.push(neighbor);
      });
      result = this.play(false, shiftedEl);
      return result;
    }
    if (this.lastResult === 'SUNK') {
      this.queue = [];
      result = this.play(true);
      return result;
    }
    return result;
  }
}
