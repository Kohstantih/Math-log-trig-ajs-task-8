import Daemon from "../js/Daemon";

test(('check change stoned'), () => {    
    const daemon = new Daemon('Демон', 'Daemon');
    daemon.stoned = true;
    const received = daemon.stoned;

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
        const daemon = new Daemon('Демон', 'Daemon');
        daemon.distance = distance;
        const received = daemon.distance;
        expect(received).toBe(expected);        
    } catch (error) {
        expect(error.message).toBe(expected)
    }
})

test.each([
    [2, false, 90],
    [2, true, 85],
])(('check \"setDamage\"'), (distance, stoned, expected) => {
    const daemon = new Daemon('Демон', 'Daemon');
    daemon.distance = distance;
    daemon.stoned = stoned;        
    const received = daemon.attack;
    expect(received).toBe(expected);
});
