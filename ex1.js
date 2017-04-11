const assert = require('assert')

function countOcurrences(substr, str) {
  let index = -1;
  let count = 0;
  while (true) {
    index = str.indexOf(substr, index + 1);
    if (index === -1) {
      break
    }

    count = count + 1;
  }


  return count;
}

assert.equal(countOcurrences("aba", "ababa"), 2);
assert.equal(countOcurrences("aba", "abababbbbbbaba"), 3);
assert.equal(countOcurrences("ab", "ababa"), 2);
assert.equal(countOcurrences("notinhere", "ababa"), 0);
