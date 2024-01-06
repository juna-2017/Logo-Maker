const { Triangle, Square, Circle } = require('./shapes');


describe('Triangle test', () => {
    test('test for triangle with blue background', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});