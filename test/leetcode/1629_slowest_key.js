// https://leetcode.com/problems/slowest-key/

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let previousDuration = 0;
  let longestDuration = 0;
  let longestKey = undefined;
  for (let x = 0; x < releaseTimes.length; x++) {
    let currentKey = keysPressed[x];
    let releaseTime = releaseTimes[x]
    let duration = releaseTime - previousDuration;

    let isLonger = duration > longestDuration;
    let isTiebreaker = duration == longestDuration && currentKey > longestKey;
    if (isLonger || isTiebreaker) {
      longestDuration = duration
      longestKey = currentKey
    }

    previousDuration = releaseTime;
  }
  return longestKey;
};

const assert = require('assert');

describe('slowest key', () => {
  it('handles example 1', () => {
    /*
    Input: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
    Output: "c"
    Explanation: The keypresses were as follows:
    Keypress for 'c' had a duration of 9 (pressed at time 0 and released at time 9).
    Keypress for 'b' had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).
    Keypress for 'c' had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).
    Keypress for 'd' had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).
    The longest of these was the keypress for 'b' and the second keypress for 'c', both with duration 20.
    'c' is lexicographically larger than 'b', so the answer is 'c'.
    */
    assert.equal(slowestKey([9, 29, 49, 50], "cbcd"), "c")
  })

  it('handles example 2', () => {
    assert.equal(slowestKey([12, 23, 36, 46, 62], "spuda"), "a")
  })
})