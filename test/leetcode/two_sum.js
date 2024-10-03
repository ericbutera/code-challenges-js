// https://leetcode.com/problems/two-sum

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const assert = require('assert');
describe('twoSum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    assert.deepEqual(twoSum(nums, target), [0, 1]);
  });

  it('should return the indices of two numbers that add up to the target', () => {
    const nums = [3, 2, 4];
    const target = 6;
    assert.deepEqual(twoSum(nums, target), [1, 2]);
  });

  it('should return the indices of two numbers that add up to the target', () => {
    const nums = [3, 3];
    const target = 6;
    assert.deepEqual(twoSum(nums, target), [0, 1]);
  });
})

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var x = 0; x < (nums.length - 1); x++) { // iterate 2, 7, 11 (skip last)
    for (var y = x + 1; y < nums.length; y++) { // iterate 7,11,15 (skip firsT)
      /*
      example of nums = [2,7,11,15]:
      2 + 7 // exits loop here
      2 + 11
      2 + 15
      7 + 11
      7 + 15
      11 + 15

      note: loop * loop = o(n^2)
      */
      let sum = nums[x] + nums[y];
      if (sum == target) {
        return [x, y];
      }
    }
  }
  // TODO: assume each solution has an answer
  // unreachable code!
};