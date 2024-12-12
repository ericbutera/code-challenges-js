// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //return plusOneStdlib(digits)
  return plusOneLoop(digits);
};

var plusOneStdlib = function (digits) {
  let num = BigInt(digits.join(""));
  num++;
  return num
    .toString()
    .split("")
    .map((val) => parseInt(val));
};

var plusOneLoop = function (digits) {
  digits[digits.length - 1]++; // increment last number

  for (let x = digits.length - 1; x >= 0; x--) {
    if (digits[x] == 10) {
      // overflow, split into two columns
      // example a: [1,2] -> [1,3]
      // example b: [10]  -> [1,0]
      digits[x] = 0;
      if (x == 0) {
        digits.unshift(1); // number needs more storage (99->100)
      } else {
        digits[x - 1]++;
      }
    }
  }
  return digits;
};

const assert = require("assert");
describe("#plusOne", () => {
  it("example 1", () => {
    assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4]);
  });
  it("example 2", () => {
    assert.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
  });
  it("example 3", () => {
    assert.deepEqual(plusOne([9]), [1, 0]);
  });
  it("example 4", () => {
    assert.deepEqual(
      plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
      [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
    );
  });
  it("example 5", () => {
    assert.deepEqual(plusOne([9, 9]), [1, 0, 0]);
  });
});

describe("#plusOneStdlib", () => {
  it("example 1", () => {
    assert.deepEqual(plusOneStdlib([4, 3, 2, 1]), [4, 3, 2, 2]);
  });
});
