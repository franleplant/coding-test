const assert = require('assert')

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ((n % i) === 0) {
      return false;
    }
  }

  return true;
}

assert.equal(isPrime(1), true);
assert.equal(isPrime(2), true);
assert.equal(isPrime(3), true);
assert.equal(isPrime(4), false);
assert.equal(isPrime(5), true);
assert.equal(isPrime(6), false);
assert.equal(isPrime(7), true);
assert.equal(isPrime(11), true);



function reverseNumber(n) {
  let reverse = 0;
  while (n > 0) {
    const rightMostNumber = n % 10;
    reverse = reverse * 10 + rightMostNumber;
    n = Math.floor(n / 10);
  }

  return reverse;
}

assert.equal(reverseNumber(92), 29);
assert.equal(reverseNumber(29), 92);
assert.equal(reverseNumber(12345), 54321);
assert.equal(reverseNumber(1000), 1);


function isOmirp(n) {
  return isPrime(reverseNumber(n));
}


assert.equal(isOmirp(92), true);
assert.equal(isOmirp(1), true);
assert.equal(isOmirp(11), true);






