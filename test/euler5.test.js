const largestprime = require('../src/euler3');
const each = require('jest-each');

describe('.largestprime()', ()=> {
  each([
    [53625436, 69463],
    [600851475143, 6857],
    [88, 11],
    [49, 7],
  ]).test('Largest Prime Factor %s = %s', (a, expected) => {
    expect(largestprime(a)).toBe(expected);
  })
});
