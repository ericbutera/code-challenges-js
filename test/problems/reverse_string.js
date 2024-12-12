const assert = require("assert");

describe("reverses string", () => {
  it("#reverseInefficient", () => {
    assert.equal(reverseInefficient("h"), "h");
    assert.equal(reverseInefficient("he"), "eh");
    assert.equal(reverseInefficient("hel"), "leh");
    assert.equal(reverseInefficient("hell"), "lleh");
    assert.equal(reverseInefficient("hello"), "olleh");
  });
  it("#reverseSwap", () => {
    assert.equal(reverseSwap("h"), "h");
    assert.equal(reverseSwap("he"), "eh");
    assert.equal(reverseSwap("hel"), "leh");
    assert.equal(reverseSwap("hell"), "lleh");
    assert.equal(reverseSwap("hello"), "olleh");
  });
});

/**
 * reverse string by reading one character at a time, from right to left
 * @param {string} input
 * @returns reversed string
 */
function reverseInefficient(input) {
  /*
    x 4 o
    x 3 l
    x 2 l
    x 1 e
    x 0 h
   */
  let output = "";
  for (let x = input.length - 1; x >= 0; x--) {
    // x = 4 to 0
    output += input[x];
  }
  return output;
}

/**
 * swap
 * 1. hello -> oellh
 * 2. oellh -> olleh
 * @param {string} input
 * @returns reversed string
 */
function reverseSwap(input) {
  // note: js strings are immutable. in other languages one can inline swap to keep memory use low
  let output = input.split(""); // create array to mimic mutable string
  let max = input.length - 1; // set maximum right index
  let half = Math.floor(input.length / 2); // odd number strings do not require swaps
  for (let left = 0; left < half; left++) {
    let right = max - left;
    let tmp = output[right]; // (store right char moving in) o, l, l, e, h
    output[right] = output[left]; // swap right (hello -> hellh)
    output[left] = tmp; // swap first (hellh -> oellh)
  }
  return output.join("");
}
