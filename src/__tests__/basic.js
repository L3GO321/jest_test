import { game } from '../app.js';

test('testPers', () => {
    const list =
    {
        name: 'Маг',
        health: 90,
    };
    const list2 =
    {
        name: 'Маг',
        health: 45,
    };
    const list3 =
    {
        name: 'Маг',
        health: 14,
    };

    expect(game(list)).toBe('healthy');
    expect(game(list2)).toBe('wounded');
    expect(game(list3)).toBe('critical');
}); 