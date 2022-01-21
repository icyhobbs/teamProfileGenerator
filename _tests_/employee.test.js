const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('Vincent', 64157, 'trackvinny@gmail.com');

    expect(employee.name).toEqual("Vincent");
    expect(employee.id).toEqual(64157);
    expect(employee.email).toEqual("trackvinny@gmail.com");
});

test('gets employee name', () => {
    const employee = new Employee ('Vincent', 64157, 'trackvinny@gmail.com');

    expect(employee.getName()).toEqual("Vincent");
});

test('gets employee ID', () => {
    const employee = new Employee ('Vincent', 64157, 'trackvinny@gmail.com');

    expect(employee.getId()).toEqual(64157);
});

test('gets employee email', () => {
    const employee = new Employee('Vincent', 64157, 'trackvinny@gmail.com');

    expect(employee.getEmail()).toEqual("trackvinny@gmail.com");
});

test('gets role of employee', () => {
    const employee = new Employee ('Vincent', 64157, 'trackvinny@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});