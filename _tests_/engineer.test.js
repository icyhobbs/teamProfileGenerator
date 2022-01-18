const Engineer = require('./lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Vincent', 64157, 'trackvinny@gmail.com');

    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Vincent', 64157, 'trackvinny@gmail.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Vincent', 64157, 'trackvinny@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
});