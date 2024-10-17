// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // 1 <= s.length <= 2 * 105
  // s consists only of printable ASCII characters.
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversed = s.split('').reverse().join('')
  return s == reversed;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeLoop = function(s) {
  // 1 <= s.length <= 2 * 105
  // s consists only of printable ASCII characters.
  if (s.length == 1)
      return true;

  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
  let half = Math.floor(s.length/2)

  for (let left=0; left <= half; left++) {
    let right = (s.length - 1) - left;
    if (s[left] != s[right])
      return false
  }
  return true
};

const assert = require('assert');

describe('valid palindrome', () =>{
  const tests = [
    { actual: "A man, a plan, a canal: Panama", expected: true },
    { actual: "race a car", expected: false },
    { actual: " ", expected: true },
    { actual: "0P", expected: false }
  ]

  it('#isPalindrome', () => {
    for (let test of tests) {
      assert.equal(isPalindrome(test.actual), test.expected, `error: ${test.actual} expected: ${test.expected}`)
    }
  })

  it('#isPalindromeLoop', () => {
    for (let test of tests) {
      assert.equal(isPalindromeLoop(test.actual), test.expected, `error: ${test.actual} expected: ${test.expected}`)
    }
  })
})