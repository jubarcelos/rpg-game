import Energy from './Energy';

interface Fighter {
  lifePoints:number;
  strength:number;
  defense:number;
  energy?:Energy;

  attack(enemy:Fighter):void;
  special(enemy:Fighter):void;
  receiveDamage(attackPoints:number):void;
  levelUp():void;
}
export default Fighter;