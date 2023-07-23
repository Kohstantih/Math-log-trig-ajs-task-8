import Character from "../js/Character";

test.each([
    ['Стрелок', 'Bowman', {
        name: 'Стрелок',
        type: 'Bowman',
        health: 100,
        level: 1,
        accessibleType: ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
    }],
    ['С', 'Bowman', 'Введено недопустимое имя'],
    ['Стрелок', 'Sword', 'Неподходящий тип персонажа']
])('create Character', (name, type, expected) => {
    try {
        const player = new Character(name, type);
        expect(player).toEqual(expected)
    } catch (error) {
        expect(error.message).toEqual(expected)
    }
})