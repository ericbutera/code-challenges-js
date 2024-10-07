// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function (nums) {
  /*
  [0,0,1,1,1,2,2,3,3,4]
  0: 0 == 0 -> duplicate
  1: 0 == 1 ->
  2: 1 == 1 ->

   */
  const out = []
  let previous = undefined
  for (let num of nums) {
    if (num != previous) {
      out.push(num);
      previous = num
    }
  }
  return out
};

// in = [0,0,1,1,1,2,2,3,3,4]
// out = 5
// nums = [0,1,2,3,4,_,_,_,_,_]

const assert = require('assert')
describe('remove duplicates from sorted array', () => {
  it('#removeDuplicates', () => {
    assert.deepEqual(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), [0, 1, 2, 3, 4])
    assert.deepEqual(removeDuplicates([1, 1, 2]), [1, 2])
  })
})