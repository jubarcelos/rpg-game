import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  protected _name: string;
  protected _dexterity: number;
  private static _instancesCount = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    this._instancesCount += 1;
    return this._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}

export default Halfling;