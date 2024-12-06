function sumOfMultiples(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    let isDivBy3 = x % 3 === 0;
    let isDivBy5 = x % 5 === 0;
    if (isDivBy3 || isDivBy5) {
      sum += x;
    }
  }

  return sum;
}

const assert = require("assert");

describe("sumOfMultiples", () => {
  it("test 1", () => {
    assert.equal(sumOfMultiples(10), 33);
  });

  it("handles 100", () => {
    assert.equal(sumOfMultiples(100), 2418);
  });
});
