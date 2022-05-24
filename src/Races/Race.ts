abstract class Race {
  protected _name: string;
  dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this.dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
  get name(): string {
    return this.name;
  }
}

export default Race;
