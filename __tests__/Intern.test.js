const Intern = require('../lib/Intern');
const intern = new Intern('username', '1234567', 'username@gmail.com', 'Chole');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('username');
    expect(intern.id).toBe('1234567');
    expect(intern.email).toBe('username@gmail.com');
    expect(intern.school).toBe('Chole');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('username');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1234567');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('username@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Chole');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});