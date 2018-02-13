function testPrime(num) {
        var isPrime = true;
        if (num >= 2) {
            if(num == 2 || num == 3){
               isPrime = true;
            }
            else if (num % 2 == 0) {
                isPrime = false;
            }
            else {
                for (i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
                    if (num % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
        }
        else {
            isPrime = false;
        }
        return isPrime;
    }

function arrayprime(n) {
    var arr=[];
    var i 
    for (i = 1; i <= n; i += 1) {
      if (n%i === 0) {
        if (testPrime(i)== true) {
        arr.push(i);
       }
      }
    }
      return Math.max.apply(null, arr);
}

module.exports = arrayprime;

