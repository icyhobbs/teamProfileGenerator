const Intern = require('../lib/intern');

test('creates an Intern object', () => {
    const intern = new Intern('Vincent', 64157, 'trackvinny@gmail.com', "MNU");

    expect(intern.school) .toEqual("MNU");
});

test('gets employee school', () => {
    const intern = new Intern('Vincent', 64157, 'trackvinny@gmail.com', "MNU");

    expect(intern.getSchool()).toEqual("MNU");
});

test('gets role of employee', () => {
    const intern = new Intern('Vincent', 64157, 'trackvinny@gmail.com');

    expect(intern.getRole()).toEqual("Intern");
});