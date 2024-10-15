// https://leetcode.com/problems/shortest-completing-word/description/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  // completing word:
  // - contains all the letters
  // - only alpha chars
  // - case insensitive
  // - if a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

  // transform plate into comparable word: `1s3 PSt` -> `sPSt` -> `spst`
  let plate = licensePlate
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase();

  // shortest criteria:
  // Return the shortest completing word in words.
  // It is guaranteed an answer exists.
  // If there are multiple shortest completing words, return the first one that occurs in words.
  let shortest = undefined;

  words: for (let word of words) { // word: step
    let counts = {}
    for (let char of word) { // char: s, t, e, p
      if (counts.hasOwnProperty(char)) {
        counts[char]++;
      } else {
        counts[char] = 1;
      }
    }

    // counts = { s: 1, t: 1, e: 1, p: 1}

    // subtract each character of the plate from the found counts in word
    for (let char of plate) { // chars = s, p, s, t
      if (!counts.hasOwnProperty(char)) {
        continue words; // fail: missing plate character
      }

      counts[char]--;
      if (counts[char] < 0) {
        continue words; // fail: more letters existed in plate than current word
      }
    }

    // all letters of plate have been accounted for
    // determine if current word is shortest
    if (shortest == undefined || word.length < shortest.length) {
      shortest = word;
    }
  }

  return shortest;
};

const assert = require('assert')
describe('#shortestCompletingWord', () => {
  it('handles example 1', () => {
    let licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
    assert.equal(shortestCompletingWord(licensePlate, words), 'steps')
  })

  it('handles example 2', () => {
    let licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
    assert.equal(shortestCompletingWord(licensePlate, words), 'pest')
  })
})