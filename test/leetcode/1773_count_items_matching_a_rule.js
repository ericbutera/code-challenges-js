// https://leetcode.com/problems/count-items-matching-a-rule

const ruleKeyToIndex = {
  'type': 0,
  'color': 1,
  'name': 2
}

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  // crude all-in-one
  let count = 0;
  items.forEach((item) => {
    let key = ruleKeyToIndex[ruleKey];
    if (item[key] == ruleValue) {
      count++;
    }
  })
  return count;
};

var countMatches1 = function (items, ruleKey, ruleValue) {
  // crude all-in-one
  return items.reduce((count, item) => {
    let key = ruleKeyToIndex[ruleKey];
    if (item[key] == ruleValue) {
      count++;
    }
    return count;
  }, 0)
};

// matcher extracts rule logic from "count matches" loop
var matcher = (item, ruleKey, ruleValue) => item[ruleKeyToIndex[ruleKey]] == ruleValue

// hard to read one liner using rule matcher, only saves counter
var countMatches2 = (items, ruleKey, ruleValue) => items.reduce((count, item) => matcher(item, ruleKey, ruleValue) ? count + 1 : count, 0)

// easier to read but will use more memory as it saves list of matches
var countMatches3 = (items, ruleKey, ruleValue) => items.filter((item) => matcher(item, ruleKey, ruleValue)).length

const assert = require('assert');
const items = [
  // [0type, 1color, 2name]
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"]
]
describe('truncate sentence', () => {
  it('#truncateSentence', () => {
    assert.equal(countMatches(items, 'color', 'silver'), 1)
    assert.equal(countMatches(items, 'type', 'phone'), 2)

    assert.equal(countMatches1(items, 'color', 'silver'), 1)
    assert.equal(countMatches1(items, 'type', 'phone'), 2)

    assert.equal(countMatches2(items, 'color', 'silver'), 1)
    assert.equal(countMatches2(items, 'type', 'phone'), 2)

    assert.equal(countMatches3(items, 'color', 'silver'), 1)
    assert.equal(countMatches3(items, 'type', 'phone'), 2)
    assert.equal(countMatches3(items, 'type', 'unknown'), 0)
  })
})