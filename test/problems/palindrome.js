const assert = require('assert');

describe('palindrome', () => {
  it('#isPalendromeStdlib', () => {
    assert.equal(isPalendromeStdlib('r'), true)
    assert.equal(isPalendromeStdlib('ra'), false)
    assert.equal(isPalendromeStdlib('rac'), false)
    assert.equal(isPalendromeStdlib('race'), false)
    assert.equal(isPalendromeStdlib('racec'), false)
    assert.equal(isPalendromeStdlib('raceca'), false)
    assert.equal(isPalendromeStdlib('racecar'), true)
  })
  it('#isPalindrome', () => {
    assert.equal(isPalindrome('r'), true)
    assert.equal(isPalindrome('ra'), false)
    assert.equal(isPalindrome('rac'), false)
    assert.equal(isPalindrome('race'), false)
    assert.equal(isPalindrome('racec'), false)
    assert.equal(isPalindrome('raceca'), false)
    assert.equal(isPalindrome('racecar'), true)
    assert.equal(isPalindrome('wow'), true)
    assert.equal(isPalindrome('noon'), true)
  })
})

function isPalendromeStdlib(input) {
  return input === input.split("").reverse().join("")
}

function isPalindrome(input) {
  // input = racecar
  //  0  1  2  3  4  5  6
  // [r][a][c][e][c][a][r]
  //
  // compare: index[0] r == index[6] r
  // compare: index[1] a == index[5] a
  // compare: index[2] c == index[4] c

  if (input.length == 1)
    return true;

  let half = Math.floor(input.length / 2); // find half-way point (account for odd length by rounding down)
  let max = input.length - 1;
  for (let left = 0; left < max; left++) {
    let right = max - left;
    if (input[left] != input[right])
      break; // no palindrome!

    if (left == half) // at the last check, therefore this is a palindrome
      return true
  }
  return false
}

