# Project Euler Problem 3
The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?
https://projecteuler.net/problem=3

## Testing Program

1. Install Jest menggunakan npm
    ```
    npm install --save-dev jest
    ```
2. Membuat fungsi program javascript dengan menggunakan module.exports sebagai output
3. Membuat file euler.test.js
    ```
    const arrayprime = require('../src/euler3');

    test('prima = 58907', () => {
      expect(arrayprime(6008514)).toBe(58907);
    });
    ```
4. Ubah salah satu script pada package.json
    ```
    {
      "scripts": {
        "test": "jest"
      }
    }
    ```
5. run `npm run test`, jika pass maka program berhasil
