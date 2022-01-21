const Engineer = require('../lib/engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Vincent', 64157, 'trackvinny@gmail.com');

    expect(engineer.name).toEqual("Vincent");
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Vincent', 64157, 'trackvinny@gmail.com', "icyhobbs");

    expect(engineer.getGithub()).toEqual("icyhobbs")
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Vincent', 64157, 'trackvinny@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
});