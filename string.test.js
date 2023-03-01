const stringLength = require('./string');
const reverseString = require('./string');
const math = require('./string');
const capitaliseString = require('./string');
  
  test('string has atleast 1 and atmost 10 characters', () => {
    const string = 'Hermon';
    expect(stringLength(string)).toBeGreaterThanOrEqual(1);
    expect(stringLength(string)).toBeLessThanOrEqual(10);
  });
  
  test('reverse name to equal eman', () => {
    const string = 'Hermon';
    expect(reverseString(string)).toMatch(/nomreH/);
  });
  
  describe('math', () => {
    describe('sum', () => {
      test('sum', () => {
        expect(math.sum(2, 3)).toEqual(5);
      });
      test('sum', () => {
        expect(math.sum(3, 4)).toEqual(7);
      });
      test('sum', () => {
        expect(math.sum(4, 5)).toEqual(9);
      });
    });
  
    describe('subtraction', () => {
      test('sum', () => {
        expect(math.subtract(2, 3)).toEqual(-1);
      });
      test('sum', () => {
        expect(math.subtract(3, 4)).toEqual(-1);
      });
      test('sum', () => {
        expect(math.subtract(4, 5)).toEqual(-1);
    });
});

describe('multiplication', () => {
  test('sum', () => {
    expect(math.multiply(2, 3)).toEqual(6);
  });
  test('sum', () => {
    expect(math.multiply(3, 4)).toEqual(12);
  });
  test('sum', () => {
    expect(math.multiply(4, 5)).toEqual(20);
  });
});

describe('division', () => {
  test('sum', () => {
    expect(math.division(6, 3)).toEqual(2);
  });
  test('sum', () => {
    expect(math.division(12, 4)).toEqual(3);
  });
  test('sum', () => {
    expect(math.division(15, 5)).toEqual(3);
  });
});
});

test('capitalise first letter in stephen', () => {
const string = 'hermon';
expect(capitaliseString(string)).toMatch(/Hermon/);
});
