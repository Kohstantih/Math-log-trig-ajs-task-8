import Magician from "../js/Magician";

test(('check change stoned'), () => {
    const magician = new Magician('Маг', 'Magician');

    magician.setStoned();
    const receivedSet = magician.stoned;


    magician.removeStoned();
    const receivedRemove = magician.stoned;

    expect(receivedSet).toBe(true);
    expect(receivedRemove).toBe(false);
})

test.each([
    ['', 'Недопустимое расстояние для атаки'],
    [3.85, 'Недопустимое расстояние для атаки'],
    [-1, 'Недопустимое расстояние для атаки'],
    [100, 'Недопустимое расстояние для атаки'],
    [4, 70]
])(('check \"setDamage\" - \"stoned = false\"'), (x, expected) => {
    try {
        const magician = new Magician('Маг', 'Magician');
        const received = magician.setDamage(x)
        expect(received).toBe(expected);        
    } catch (error) {
        expect(error.message).toBe(expected)
    }
})

test(('check \"setDamage\" - \"stoned = true\"'), () => {
    const magician = new Magician('Маг', 'Magician');

    magician.setStoned();
    const received = magician.setDamage(5);

    expect(received).toBe(48);
})
