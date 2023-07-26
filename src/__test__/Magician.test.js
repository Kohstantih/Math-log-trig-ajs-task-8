import Magician from "../js/Magician";

test(('check change stoned'), () => {
    const  magician = new Magician('Маг', 'Magician');
    magician.stoned = true;
    const received = magician.stoned;

    expect(received).toBe(true);
    })

test.each([
    ['расстояние', 'Недопустимое расстояние для атаки'],
    [2.3, 'Недопустимое расстояние для атаки'],
    [0, 'Недопустимое расстояние для атаки'],
    [6, 'Недопустимое расстояние для атаки'],
    [3, 3]
])(('check \"distance\"'), (distance, expected) => {
    try {
        const magician = new Magician('Маг', 'Magician');
        magician.distance = distance;
        const received = magician.distance;
        expect(received).toBe(expected);        
    } catch (error) {
        expect(error.message).toBe(expected)
    }
})

test.each([
    [2, false, 90],
    [2, true, 85],
])(('check \"setDamage\"'), (distance, stoned, expected) => {
    const magician = new Magician('Маг', 'Magician');
    magician.distance = distance;
    magician.stoned = stoned;        
    const received = magician.attack;
    expect(received).toBe(expected);
})