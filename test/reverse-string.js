// https://leetcode.com/problems/reverse-string/

const assert = require("assert");

/*
reverse steps:
- determine half-way point (floor for odd count)
- for loop with index; iterate to half-way point
- max = s.length - 1
- swap s[index] with s[max - index]

determine half-way mark:
a
a
1/1 = 1

be
b e
2/2 = 1

cat
c a t
3/2 = 1.5; floor(1.5) = 1

cast
ca st
4/2 = 2

casts
ca s ts
5 / 2 = 2.5; floor(2.5) = 2
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let half = Math.floor(s.length / 2);
  let max = s.length - 1;

  // strings are immutable in js, so "cheat" with a char array
  s = Array.from(s);

  for (let i = 0; i < half; i++) {
    let store = s[max - i];
    s[max - i] = s[i];
    s[i] = store;
  }

  return s.join("");
};

describe("reverseString", () => {
  it("should pass sample", () => {
    let input = "hello";
    let result = reverseString(input);
    assert.equal(result, "olleh");
  });

  it("should handle even words", () => {
    assert.equal(reverseString("hi"), "ih");
  });

  it("should handle odd words", () => {
    assert.equal(reverseString("cat"), "tac");
  });

  it("should handle single char", () => {
    assert.equal(reverseString("a"), "a");
  });
});
