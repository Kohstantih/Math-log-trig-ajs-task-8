export default class Character {
  constructor(name, type, health = 100, level = 1) {
    this.accessibleType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;

    this.validName(name);
    this.validType(type);
  }

  validName() {
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) throw new Error('Введено недопустимое имя');
  }

  validType() {
    if (typeof this.type !== 'string' || !this.accessibleType.includes(this.type)) throw new Error('Неподходящий тип персонажа');
  }
}
