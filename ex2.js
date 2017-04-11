const assert = require('assert')


// Recursive function implemented via a recursive process
function tribonacciRecursive(n) {
  if (n === 0 || n === 1 || n === 2) {
    return 1;
  }

  return tribonacciRecursive(n - 1) + tribonacciRecursive(n - 2) + tribonacciRecursive(n - 3);
}


//base cases
assert.equal(tribonacciRecursive(0), 1);
assert.equal(tribonacciRecursive(1), 1);
assert.equal(tribonacciRecursive(2), 1);

// recursive cases
assert.equal(tribonacciRecursive(3), 3);
assert.equal(tribonacciRecursive(4), 5);
assert.equal(tribonacciRecursive(5), 9);


// An atempt at an Iterative Process
function tribonacciIterative(n) {
  if (n === 0 || n === 1 || n === 2) {
    return 1;
  }

  return iteration(3, [1, 1, 1], n);
}


function iteration(currentIndex, lastThree, n) {
  const sumOfTheThree = lastThree.reduce((acc, x) => acc + x, 0);
  if (currentIndex === n) {
    return sumOfTheThree;
  }

  lastThree.shift()
  lastThree.push(sumOfTheThree)
  return iteration(currentIndex + 1, lastThree, n)
}


//base cases
assert.equal(tribonacciIterative(0), 1);
assert.equal(tribonacciIterative(1), 1);
assert.equal(tribonacciIterative(2), 1);

// recursive cases
assert.equal(tribonacciIterative(3), 3);
assert.equal(tribonacciIterative(4), 5);
assert.equal(tribonacciIterative(5), 9);
