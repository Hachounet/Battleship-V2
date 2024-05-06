/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

/* This class generates the general rendering of the application. The order of implementation is important to ensure that the various functions retrieve the necessary elements. It could be refactored by working on the controller instance rather than on the parameters given at instantiation.
 */

import Gameboard from './Gameboard';

export default class GeneralRender {
  constructor(p1keys, p2keys, controller) {
    this.P1keys = Object.keys(p1keys);
    this.P2Keys = Object.keys(p2keys);
    this.controller = controller;

    this.body = document.querySelector('body');
    this.generatePlayerParts();

    this.leftPart = document.getElementById('left-part');
    this.rightPart = document.getElementById('right-part');
    this.generateInputsPlayers();
    this.createGBDiv();
    this.GBDivP1 = document.getElementById('GBP1');
    this.GBDivP2 = document.getElementById('GBP2');
    this.generateGB1();
    this.generateGB2();
    this.generateMenuPart();
    this.menuPart = document.getElementById('menu-part');
    this.generateMessageBox();
    this.generateMenuOptions();
  }

  changeMessage(message) {
    const messageDiv = document.getElementById('message-div');

    messageDiv.textContent = message;
  }

  createGBDiv() {
    const GBDivP1 = document.createElement('div');
    const GBDivP2 = document.createElement('div');
    GBDivP1.id = 'GBP1';
    GBDivP2.id = 'GBP2';

    this.leftPart.append(GBDivP1);
    this.rightPart.append(GBDivP2);
  }

  sortArray(array) {
    let firstItem = array[0];
    let previousFirst = 0;
    const newArray = [];
    newArray.push(firstItem);

    while (firstItem !== 'J10') {
      const index = array.indexOf(firstItem) + 10;
      firstItem = array.at(index);
      if (firstItem === undefined) {
        previousFirst += 1;
        firstItem = array[previousFirst];
        newArray.push(firstItem);
      } else {
        firstItem = array.at(index);
        newArray.push(firstItem);
      }
    }

    return newArray;
  }

  generateGB1() {
    const array1 = this.sortArray(this.P1keys);
    array1.forEach((key) => {
      const div = document.createElement('div');
      div.classList.add('cells');
      div.id = 'GB1'.concat(key);
      this.GBDivP1.append(div);
    });
  }

  generateGB2() {
    const { GBDivP2 } = this;

    const GB2 = GBDivP2;
    const array2 = this.sortArray(this.P2Keys);

    array2.forEach((key) => {
      const div = document.createElement('div');
      div.classList.add('cells');
      div.id = 'GB2'.concat(key);
      GB2.append(div);
    });
  }

  generatePlayerParts() {
    const leftPart = document.createElement('div');
    const rightPart = document.createElement('div');
    leftPart.id = 'left-part';
    rightPart.id = 'right-part';
    leftPart.classList.add('player-parts');
    rightPart.classList.add('player-parts');
    this.body.append(leftPart, rightPart);
  }

  generateInputsPlayers() {
    const P1Name = document.createElement('p');
    P1Name.textContent = 'Player 1';
    this.leftPart.append(P1Name);

    const P2Name = document.createElement('p');
    P2Name.textContent = 'Opponent';
    this.rightPart.append(P2Name);
  }

  generateMenuPart() {
    const menuPart = document.createElement('div');
    menuPart.id = 'menu-part';
    this.body.append(menuPart);
  }

  generateMessageBox() {
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message-div';
    const message = document.createElement('p');
    message.textContent = 'Once done, click on a cell to begin the fight !';
    messageDiv.append(message);
    this.menuPart.append(messageDiv);
  }

  generateMenuOptions() {
    const menuOptionsDiv = document.createElement('div');
    menuOptionsDiv.id = 'menu-options';

    const start = document.createElement('button');
    const transitionSpanStart = document.createElement('span');
    const gradientSpanStart = document.createElement('span');
    const labelSpanStart = document.createElement('span');

    transitionSpanStart.classList.add('transition');
    gradientSpanStart.classList.add('gradient');
    labelSpanStart.classList.add('label');
    labelSpanStart.textContent = 'Randomize Ships / (Re)start';
    start.append(transitionSpanStart, gradientSpanStart, labelSpanStart);

    menuOptionsDiv.append(start);
    this.menuPart.append(menuOptionsDiv);

    start.addEventListener('click', () => {
      this.controller.restart();
    });
  }

  destroy() {
    const body = document.querySelector('body');
    body.innerHTML = '';
  }
}
