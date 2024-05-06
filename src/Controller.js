/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

// This Controller could be refactored by avoiding all the p*entries and p*keys by just passing a reference to himself to GRender and render

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
    // False is to avoid recreating new eventListeners
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
    // Get adjacencyList from player 1 to get positions to know where to play

    const data = this.player1.Gameboard.adjacencyList;
    const coord = this.player2.gamemode.logic(data);
    this.receiveAttackPos(coord);
  }

  endOfGame() {
    // Need to manually change this.playerTurn to P1 to avoid first click cancelled because not right turn. AI can't autoplay.

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
