// https://leetcode.com/problems/keyboard-row/

var findWords = function (words) {
  // Input: words = ["Hello","Alaska","Dad","Peace"]
  // Output: ["Alaska", "Dad"]
  // brute force method:
  // loop words as word
  // loop rows as row
  // loop word as char
  // does row contain char?

  const row1 = "qwertyuiop".split('')
  const row2 = "asdfghjkl".split('')
  const row3 = "zxcvbnm".split('')
  const rows = [row1, row2, row3]

  const out = []

  wordLoop: for (let word of words) { // Alaska
    rowLoop: for (let row of rows) { // a s d f g h j k l
      let matched = 0
      for (let char of word.toLowerCase()) { // a l a s k a
        // TODO(optimize): don't search the same letter multiple times
        if (row.includes(char)) {
          matched++;
        } else {
          continue rowLoop;
        }
      }
      if (matched == word.length) {
        out.push(word)
        continue wordLoop;
      }
    }
  }

  return out;
};

const assert = require('assert');
describe('keyboard row', () => {
  it('solves example 1', () => {
    let words = ["Hello", "Alaska", "Dad", "Peace"]
    assert.deepEqual(findWords(words), ["Alaska", "Dad"])
  })

  it('solves example 2', () => {
    let words = ["omk"]
    assert.deepEqual(findWords(words), [])
  })

  it('solves example 3', () => {
    let words = ["adsdf", "sfd"]
    assert.deepEqual(findWords(words), ["adsdf", "sfd"])
  })
})