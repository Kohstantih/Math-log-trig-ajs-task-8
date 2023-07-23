import CorrectionDamage from './CorrectionDamage';

export default class Magician extends CorrectionDamage {
  constructor(name, type, health, level, stoned, attack = 100, defence = 40) {
    super(name, type, health, level, stoned);
    this.attack = attack;
    this.defence = defence;
  }
}
