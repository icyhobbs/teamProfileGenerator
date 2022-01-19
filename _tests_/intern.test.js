const Intern = require('../lib/intern');

test('creates an Intern object', () => {
    const intern = new Intern('Vincent', 64157, 'trackvinny@gmail.com');

    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Vincent', 64157, 'trackvinny@gmail.com');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Vincent', 64157, 'trackvinny@gmail.com');

    expect(intern.getRole()).toEqual("Intern");
});