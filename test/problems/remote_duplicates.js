function removeDuplicates(nums) {
  // because the array is sorted we can simply check if the value changes
  let res = [];
  let current = undefined;
  for (let n of nums) {
    if (n != current) {
      res.push(n);
      current = n;
    }
  }
  return res;
}

const assert = require("assert");

describe("remove dupes", () => {
  it("handles example", () => {
    assert.deepEqual(removeDuplicates([1, 1, 2]), [1, 2]);
  });
});
