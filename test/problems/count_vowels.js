const assert = require('assert');

describe('count vowels', () => {
  it('#countVowels', () => {
    assert.equal(countVowels('hello world'), 3)
    assert.equal(countVowels('quick'), 2)
    assert.equal(countVowels('a'), 1)
    assert.equal(countVowels('no'), 1)
    assert.equal(countVowels('two'), 1)
    assert.equal(countVowels('three'), 2)
    assert.equal(countVowels('count vowels'), 4)
  })
})

const vowels = ['a', 'e', 'i', 'o', 'u']
function countVowels(input) {
  // case sensitivity
  // transliterate glyphs
  let count = 0;
  for (let x = 0; x < input.length; x++) {
    if (vowels.includes(input[x])) {
      count++;
    }
  }
  return count;
}