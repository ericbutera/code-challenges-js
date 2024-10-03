// https://leetcode.com/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // x = 0
  // while true
  // for word in array
  // if mismatch, return false

  // flower[0] = f
  // flow[0] = f
  // flight[0] = f
  // continue
  // flower[1] = l
  // flow[1] = l
  // flight[1] = l
  // continue
  // flower[2] = o
  // flow[2] = o
  // flight[2] = i
  // mismatch!

  // strs = [flower, flow, flight]
  let first = strs.shift(); // flower
  for (let x = 0; x < first.length; x++) {
    // 0f 1l 2o 3w 4e 5r
    for (let word of strs) {
      // TODO: (bounds check) word might be less length than first
      let mismatch = word[x] != first[x]
      if (mismatch) {
        return first.substring(0, x);
      }
    }
  }
  return first;
};

const assert = require('assert');
describe('longestCommonPrefix', () => {
  it('should return the longest common prefix', () => {
    const strs = ["flower", "flow", "flight"];
    assert.equal(longestCommonPrefix(strs), "fl");
  });

  it('should return the longest common prefix', () => {
    const strs = ["dog", "racecar", "car"];
    assert.equal(longestCommonPrefix(strs), "");
  });
});
