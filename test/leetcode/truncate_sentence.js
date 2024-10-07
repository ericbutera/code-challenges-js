// https://leetcode.com/problems/truncate-sentence

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  // TODO: normalize sentence to a-zA-Z
  return s.split(' ').slice(0, k).join(' ')
};

const assert = require('assert');
describe('truncate sentence', () => {
  it('#truncateSentence', () => {
    assert.equal(truncateSentence("Hello how are you Contestant", 4), "Hello how are you")
    assert.equal(truncateSentence("What is the solution to this problem", 4), "What is the solution")
    assert.equal(truncateSentence("chopper is not a tanuki", 5), "chopper is not a tanuki")
  })
})