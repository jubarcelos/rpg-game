abstract class Race {
  protected _name: string;
  protected _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
  
  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}

export default Race;
