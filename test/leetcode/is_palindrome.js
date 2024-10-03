// https://leetcode.com/problems/palindrome-number/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let s = x.toString();
  /*
  example: 121
  left[0] 1 == right[2] 1

  example: 10
  left[0] 1 != right[1] 0
  */

  // 111 -> half = 0
  // 1111 -> half = 1
  // 11111 -> half = 1
  let half = Math.floor(s.length / 2); // TODO handle odd #'s (eg: 12321 middle is 3, but we should only compare to 2 since middle == middle)
  for (let left = 0; left <= half; left++) {
    let right = (s.length - 1) - left;
    if (s[left] != s[right]) {
      return false;
    }
  }
  return true;
};

const assert = require('assert')
describe('isPalindrome', () => {
  it('should handle 12321', () => {
    assert.equal(isPalindrome(12321), true)
  })

  it('should handle 1221', () => {
    assert.equal(isPalindrome(1221), true)
  })

  it('should return true if the number is a palindrome', () => {
    assert.equal(isPalindrome(121), true)
  })

  it('should return false if the number is not a palindrome', () => {
    assert.equal(isPalindrome(-121), false)
  })

  it('should return false if the number is not a palindrome', () => {
    assert.equal(isPalindrome(10), false)
  })

  it('should return false if the number is not a palindrome', () => {
    assert.equal(isPalindrome(-101), false)
  })
})