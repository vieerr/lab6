const { resta, multiplica, divide } = require('./basicFns');

describe('resta', () => {
    test('should subtract two positive numbers', () => {
        expect(resta(10, 5)).toBe(5);
    });
    
});

describe('multiplica', () => {
    test('should multiply two positive numbers', () => {
        expect(multiplica(4, 5)).toBe(20);
    });
    
});

describe('divide', () => {
    test('should divide two positive numbers', () => {
        expect(divide(10, 2)).toBe(5)
    });
    test('should return Infinity when dividing by zero', () => {
        expect(divide(5, 0)).toBe(Infinity);
    });
});