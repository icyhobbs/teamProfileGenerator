const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Vincent', 64157, 'trackvinny@gmail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Vincent', 64157, 'trackvinny@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});