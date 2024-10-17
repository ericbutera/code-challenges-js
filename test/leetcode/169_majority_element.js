// https://leetcode.com/problems/majority-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // The majority element is the element that appears more than ⌊n / 2⌋ times.
  // You may assume that the majority element always exists in the array.

  // build a map of key=number value=total-count
  const counter = {}
  for (let num of nums) {
    if (counter.hasOwnProperty(num)) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }

  // find the largest number in counter
  let largestNum = 0;
  let largestCount = 0;
  Object.entries(counter).forEach(([num,count]) => {
    if (count > largestCount) {
      largestCount = count;
      largestNum = parseInt(num);
    }
  })

  return largestNum;
};

const assert = require('assert');
describe('majority element', () => {
  const tests = [
    { actual: [3,2,3], expected: 3 },
    { actual: [2,2,1,1,1,2,2], expected: 2 }
  ]
  it('handles tests', () => {
    for (let test of tests) {
      assert.equal(majorityElement(test.actual), test.expected, `error: ${test.actual} expected: ${test.expected}`)
    }
  })
})