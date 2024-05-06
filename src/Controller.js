/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import GeneralRender from './General-Render';
import Player from './Player';
import Render from './Render';

export default class Controller {
  constructor(playerTurn = 'Player 1') {
    this.playerTurn = playerTurn;
    this.player1 = new Player('Player 1');
    this.player2 = new Player('AI');
    this.p1keys = this.player1.Gameboard.adjacencyList;
    this.p2keys = this.player2.Gameboard.adjacencyList;
    this.p1entries = Object.entries(this.player1.Gameboard.adjacencyList);
    this.p2entries = Object.entries(this.player2.Gameboard.adjacencyList);
    this.GRender = new GeneralRender(this.p1keys, this.p2keys, this);
    this.render = new Render(
      this.p1entries,
      this.p2entries,
      this.player1.Gameboard.missedLogs,
      this.player2.Gameboard.missedLogs,
      this.playerTurn,
      true,
      this
    );
  }

  restart() {
    console.log('launched');
    this.player1 = new Player('Player 1');
    this.player2 = new Player('AI');
    this.p1keys = this.player1.Gameboard.adjacencyList;
    this.p2keys = this.player2.Gameboard.adjacencyList;
    this.p1entries = Object.entries(this.player1.Gameboard.adjacencyList);
    this.p2entries = Object.entries(this.player2.Gameboard.adjacencyList);
    this.GRender.destroy();
    this.GRender = new GeneralRender(this.p1keys, this.p2keys, this);
    this.render = new Render(
      this.p1entries,
      this.p2entries,
      this.player1.Gameboard.missedLogs,
      this.player2.Gameboard.missedLogs,
      this.playerTurn,
      true,
      this
    );
  }

  switchTurn() {
    this.playerTurn = this.playerTurn === 'Player 1' ? 'AI' : 'Player 1';
  }

  callGeneralRenderCellStatus() {
    this.GRender.messageInfos();
  }

  callGeneralRenderSwitchTurnMsg(result) {
    if (result === true) {
      result = "You've hit something !";
    }
    if (result === false) {
      result = 'Deep in water, Captain !';
    }
    if (result === 'SUNK') {
      result = ' We got one ! For democracy !';
    }
    this.GRender.changeMessage(result);
  }

  receiveAttackPos(infos) {
    if (this.playerTurn === 'Player 1') {
      const result = this.player2.Gameboard.receiveAttack(infos);
      this.callGeneralRenderSwitchTurnMsg(result);
      this.endOfTurn();
    }
    if (this.playerTurn === 'AI') {
      const result = this.player1.Gameboard.receiveAttack(infos);

      this.player2.gamemode.lastResult = result;
      this.endOfTurn();
    }
  }

  generateNewRender() {
    this.render = new Render(
      this.p1entries,
      this.p2entries,
      this.player1.Gameboard.missedLogs,
      this.player2.Gameboard.missedLogs,
      this.playerTurn,
      false,
      this
    );
  }

  endOfTurn() {
    this.generateNewRender();
    if (this.endOfGame() === false) {
      this.switchTurn();
      if (this.playerTurn === 'AI') {
        this.makeAIPlay();
      }
    }
  }

  makeAIPlay() {
    const data = this.player1.Gameboard.adjacencyList;
    const coord = this.player2.gamemode.logic(data);
    this.receiveAttackPos(coord);
  }

  endOfGame() {
    console.log(this.player1.Gameboard.shipsLogs);
    let result = false;
    if (this.player1.Gameboard.allSunk()) {
      this.GRender.changeMessage(`${this.playerTurn} have win !`);

      this.callRenderToEnd();
      result = true;
      this.playerTurn = 'Player 1';
      return result;
    }
    if (this.player2.Gameboard.allSunk()) {
      this.GRender.changeMessage(`${this.playerTurn} have win !`);

      this.callRenderToEnd();
      result = true;
      this.playerTurn = 'Player 1';
      return result;
    }

    return result;
  }

  callRenderToEnd() {
    this.generateNewRender();
    this.render.endRender();
  }
}
