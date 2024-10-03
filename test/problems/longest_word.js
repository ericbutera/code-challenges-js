function longestWord(sentence) {
  // do we care about non alpha chars? (ie dog.)
  let words = sentence.split(' ')
  let length = 0;
  let longest = '';
  words.forEach((word) => {
    if (word.length > length) {
      longest = word;
      length = word.length;
    }
  })
  return longest;
}

const assert = require('assert');
describe('longest word', () => {
  it('#longestWord', () => {
    let input = 'The quick brown fox jumped over the lazy dog';
    let output = 'jumped';
    assert.equal(longestWord(input), output)
  })
})