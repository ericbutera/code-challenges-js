// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  let chars = [];
  for (let word of words) {
    chars.push(word[0]) // 1 <= words[i].length <= 10 (guaranteed length)
  }
  let acronym = chars.join('')
  // words[i] and s consist of lowercase English letters. (no need to convert case for string matching)
  return s == acronym
};

const assert = require('assert')
describe('truncate sentence', () => {
  it('handles example 1', () => {
    assert.equal(isAcronym(["alice", "bob", "charlie"], 'abc'), true)
  })

  it('handles example 2', () => {
    assert.equal(isAcronym(["an", "apple"], 'a'), false)
  })

  it('handles example 3', () => {
    assert.equal(isAcronym(["never", "gonna", "give", "up", "on", "you"], 'ngguoy'), true)
  })
})