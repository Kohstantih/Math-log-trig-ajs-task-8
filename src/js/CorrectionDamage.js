import Character from './Character';

export default class CorrectionDamage extends Character {
  constructor(name, type, health, level, stoned = false, distance = 1) {
    super(name, type, health, level);
    this.stoned = stoned;
    this.distance = distance;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set distance(value) {
    if (typeof value !== 'number' || !Number.isInteger(value) || value < 1 || value > 5) throw new Error('Недопустимое расстояние для атаки');
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {    
    let damage = this._attack * (1 - (this._distance - 1) / 10);
    if (this._stoned) damage -= Math.round(Math.log2(this._distance) * 5);
    return damage;
  }
}
