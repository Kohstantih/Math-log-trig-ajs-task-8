import Daemon from "../js/Daemon";

test(('check change stoned'), () => {
    const daemon = new Daemon('Демон', 'Daemon');

    daemon.setStoned();
    const receivedSet = daemon.stoned;


    daemon.removeStoned();
    const receivedRemove = daemon.stoned;

    expect(receivedSet).toBe(true);
    expect(receivedRemove).toBe(false);
})

test.each([
    ['расстояние', 'Недопустимое расстояние для атаки'],
    [2.3, 'Недопустимое расстояние для атаки'],
    [0, 'Недопустимое расстояние для атаки'],
    [6, 'Недопустимое расстояние для атаки'],
    [3, 80]
])(('check \"setDamage\" - \"stoned = false\"'), (x, expected) => {
    try {
        const daemon = new Daemon('Демон', 'Daemon');
        const received = daemon.setDamage(x)
        expect(received).toBe(expected);        
    } catch (error) {
        expect(error.message).toBe(expected)
    }
})

test(('check \"setDamage\" - \"stoned = true\"'), () => {
    const daemon = new Daemon('Демон', 'Daemon');

    daemon.setStoned();
    const received = daemon.setDamage(2);

    expect(received).toBe(85);
})