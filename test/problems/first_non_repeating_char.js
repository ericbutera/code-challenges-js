/*
Write a function firstNonRepeatingChar that takes a string as input and returns the first character that does not repeat in the string. If all characters repeat or the string is empty, return null.
Example Input and Output:

console.log(firstNonRepeatingChar("javascript"));  // Output: "j"
console.log(firstNonRepeatingChar("swiss"));       // Output: "w"
console.log(firstNonRepeatingChar("aabbcc"));      // Output: null
console.log(firstNonRepeatingChar(""));           // Output: null

Constraints:

    The input string will contain only lowercase alphabetic characters (a-z).
    The function should have a time complexity better than O(n²).
*/
function firstNonRepeatingChar(input) {
  let counts = {};
  for (let c of input) {
    if (!counts[c]) {
      counts[c] = 1;
    } else {
      counts[c]++;
    }
  }
  for (let c of input) {
    if (counts[c] == 1) return c;
  }
  return null;
}

const assert = require("assert");
describe("firstNonRepeatingChar", () => {
  const testCases = [
    { input: "javascript", expected: "j" },
    { input: "swiss", expected: "w" },
    { input: "aabbcc", expected: null },
    { input: "", expected: null },
    { input: "aaabbc", expected: "c" },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return '${expected}' for input '${input}'`, () => {
      assert.strictEqual(firstNonRepeatingChar(input), expected);
    });
  });
});
