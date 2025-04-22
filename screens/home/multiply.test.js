const multiply = require('./multiply');

describe('multiply function', () => {
  test('multiplies two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(10, 10)).toBe(100);
  });

  test('multiplies with zero correctly', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  test('multiplies negative numbers correctly', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(4, -5)).toBe(-20);
    expect(multiply(-7, -8)).toBe(56);
  });

  test('multiplies decimal numbers correctly', () => {
    expect(multiply(2.5, 2)).toBe(5);
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});