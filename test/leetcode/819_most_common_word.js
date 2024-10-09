// https://leetcode.com/problems/most-common-word/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
  // banned[i] consists of only lowercase English letters.

  // 1. normalize string (lowercase, remove invalid chars)
  // 2. split into words
  // 3. create counter map of word => count
  // 4. iterate words
  // 5. skip word if banned
  // 6. increment counter[word]
  // 7. create largest variable
  // 8. loop counter as word => count
  // 9. if count > largest -> update largest (TODO: tie breaker?)
  // 10. return largest

  paragraph = paragraph.toLowerCase()
  paragraph = paragraph.replace(/[^a-zA-Z ]/g, ' ') // invalid chars
  paragraph = paragraph.replace(/\s+/g, ' ').trim() // whitespace
  let words = paragraph.split(' ')
  const counter = {} // word => count
  for (let word of words) {
    let isBanned = banned.includes(word)
    if (isBanned)
      continue;

    if (!counter.hasOwnProperty(word)) {
      counter[word] = 1
    } else {
      counter[word]++;
    }
  }

  let largest = '';
  for (const [word, count] of Object.entries(counter)) {
    if (!largest || count > counter[largest]) {
      largest = word;
    }
  }

  return largest;
};

const assert = require('assert')
describe('most common word', () => {
  it('example 1', () => {
    let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
    let banned = ["hit"]
    assert.equal(mostCommonWord(paragraph, banned), "ball")
  })

  it('handles example 2', () => {
    let paragraph = "a."
    let banned = []
    assert.equal(mostCommonWord(paragraph, banned), "a")
  })

  it('handles example 3', () => {
    let paragraph = "Bob. hIt, baLl"
    let banned = ["bob", "hit"]
    assert.equal(mostCommonWord(paragraph, banned), "ball")
  })

  it('handles example 4', () => {
    let paragraph = "a, a, a, a, b,b,b,c, c"
    let banned = ["a"]
    assert.equal(mostCommonWord(paragraph, banned), "b")
  })

  it('handle example 5', () => {
    let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. Bob hit a ball, the hit BALL flew far after it was hit. "
    let banned = ["hit"]
    assert.equal(mostCommonWord(paragraph, banned), "ball")
  })
})