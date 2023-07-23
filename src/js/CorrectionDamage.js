import Character from './Character';

export default class CorrectionDamage extends Character {
  constructor(name, type, health, level, stoned = false) {
    super(name, type, health, level);
    this.stoned = stoned;
  }

  setStoned() {
    this.stoned = true;
  }

  removeStoned() {
    this.stoned = false;
  }

  setDamage(x) {
    if (typeof x !== 'number' || !Number.isInteger(x) || x < 1 || x > 5) throw new Error('Недопустимое расстояние для атаки');
    let damage = this.attack * (1 - (x - 1) / 10);
    if (this.stoned) damage -= Math.round(Math.log2(x) * 5);
    return damage;
  }
}
