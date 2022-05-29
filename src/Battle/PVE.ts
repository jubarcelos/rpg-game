import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _allOrOne: SimpleFighter[];

  constructor(player: Fighter, allOrOne: SimpleFighter[]) {
    super(player);
    this._allOrOne = allOrOne;
  }

  protected combat(): void {
    for (let index = 0; index < this._allOrOne.length; index += 1) {
      while (this.player.lifePoints > 0
        && this._allOrOne[index].lifePoints > 0) {
        this.player.attack(this._allOrOne[index]);
        this._allOrOne[index].attack(this.player);
      }
    }
  }

  fight(): number {
    this.combat();
    return super.fight();
  }
}

export default PVP;