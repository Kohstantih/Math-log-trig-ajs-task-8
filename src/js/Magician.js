import CorrectionDamage from './CorrectionDamage';

export default class Magician extends CorrectionDamage {
  constructor(name, type, health, level, stoned, distance, attack = 100, defence = 40) {
    super(name, type, health, level, stoned, distance);
    this.attack = attack;
    this.defence = defence;
  }
}
