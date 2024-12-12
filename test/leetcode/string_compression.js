// https://leetcode.com/problems/string-compression/description/

var compress = function (chars) {
  const out = [];
  let count = 0;
  for (let x = 0; x < chars.length; x++) {
    let current = chars[x];
    let hasNext = x + 1 < chars.length;
    let next = hasNext ? chars[x + 1] : "";

    if (current != next) {
      // change detected
      out.push(current);
      appendTotal(out, count);
      count = 0;
    } else {
      count++;
    }
  }

  return out;
};

function appendTotal(out, count) {
  if (count > 0) {
    // Note that group lengths that are 10 or longer will be split into multiple characters in chars
    let total = count + 1;
    if (total >= 10) {
      for (let num of total.toString()) {
        out.push(num.toString());
      }
    } else {
      out.push(total.toString());
    }
  }
}

const assert = require("assert");
describe("compress", () => {
  it("handles example 1", () => {
    assert.deepEqual(compress(["a", "a", "b", "b", "c", "c", "c"]), [
      "a",
      "2",
      "b",
      "2",
      "c",
      "3",
    ]);
  });

  it("handles example 2", () => {
    assert.deepEqual(compress(["a"]), ["a"]);
  });

  it("handles example 3", () => {
    assert.deepEqual(
      compress([
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
      ]),
      ["a", "b", "1", "2"]
    );
  });
});
