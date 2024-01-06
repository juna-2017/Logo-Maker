const { Triangle, Square, Circle } = require('./shapes');


describe('Triangle test', () => {
    test('test for triangle with blue background', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});

describe('Square test', () => {
    test('test for square with green background', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x = "73" y= "40" width = "160" height = "160" fill = "green"/>');
    })
});

describe('Circle test', () => {
    test('test for circle with #dc143c background', () => {
        const shape = new Circle();
        shape.setColor("#dc143c");
        expect(shape.render()).toEqual('<circle cx = "150" cy = "115" r= "80" fill = "#dc143c"/>');
    })
});