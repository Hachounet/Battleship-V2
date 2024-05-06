import Gameboard from './Gameboard';
import AI from './AI';

export default class Player {
  constructor(player) {
    this.Gameboard = new Gameboard();
    this.player = player;
    this.gamemode = false;
    this.switchAI();
  }

  switchAI() {
    if (this.player === 'AI') {
      this.gamemode = new AI();
    } else {
      this.gamemode = false;
    }
  }
}
