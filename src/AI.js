/* eslint-disable class-methods-use-this */

export default class AI {
  constructor(queue = []) {
    this.allLogs = new Set();
    this.queue = queue;
    this.lastMove = null;
    this.lastResult = false;
  }

  generateRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const randomNumb = Math.floor(
      Math.random() * (maxFloored - minCeiled + 1) + minCeiled
    );
    return randomNumb;
  }

  generateRandomMove() {
    // 65 74
    const col = this.generateRandom(65, 74);
    const row = this.generateRandom(1, 10);
    const string = String.fromCharCode(col);
    const concat = string.concat(row.toString());
    return concat;
  }

  play(choice, queuecoord) {
    // If choice is true do Random else use queuecoord
    let coord = 0;
    if (choice === true) {
      coord = this.generateRandomMove();

      while (this.allLogs.has(coord)) {
        coord = this.generateRandomMove();
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
