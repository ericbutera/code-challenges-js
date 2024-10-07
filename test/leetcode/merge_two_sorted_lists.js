// https://leetcode.com/problems/merge-two-sorted-lists

var mergeTwoLists = function (list1, list2) {
  // iterate over shortest list
  // compare elements from lists
  // add & iterate cursor of smallest entry

  // 1. loop shortest list
  const out = [];
  let max = Math.max(list1.length, list2.length)
  let cursor1 = 0, cursor2 = 0;
  while (cursor1 < max && cursor2 < max) {
    if (list1[cursor1] <= list2[cursor2]) {
      out.push(list1[cursor1]);
      cursor1++;
    } else {
      out.push(list2[cursor2]);
      cursor2++;
    }
  }

  // 2. add remainders
  for (let x = cursor1; x < list1.length; x++) {
    out.push(list1[cursor1]);
    cursor1++;
  }
  for (let x = cursor2; x < list2.length; x++) {
    out.push(list2[cursor2]);
    cursor2++;
  }

  return out;
};

const assert = require('assert');
describe('merge two sorted lists', () => {
  it('#mergeTwoLists', () => {
    assert.deepEqual(mergeTwoLists([1, 2, 4], [1, 3, 4]), [1, 1, 2, 3, 4, 4])
    assert.deepEqual(mergeTwoLists([1, 2, 4], [1, 1, 1, 2, 4]), [1, 1, 1, 1, 2, 2, 4, 4])
    assert.deepEqual(mergeTwoLists([1, 1, 1, 2, 4], [1, 2, 4]), [1, 1, 1, 1, 2, 2, 4, 4])
  })
})
