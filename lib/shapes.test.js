const {Circle, Square, Triangle} = require("./shapes")
describe('Circle', () => {
    test('renders successfully', () => {
      const shape = new Circle();
      var color = 'green';
      shape.setColor(color);
      expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="green"/>');
    });
  });

  describe('Square', () => {
      test('renders successfully', () => {
        const shape = new Square();
        var color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual('<rect x="0" y="0" height="300" width="300" fill="blue"/>');
      });
    });

  describe('Triangle', () => {
      test('renders successfully', () => {
        const shape = new Triangle();
        var color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="red"/>')
        // expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
      });
    });