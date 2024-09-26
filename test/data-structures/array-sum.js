var assert = require('assert');

function simpleArraySum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++)
    total += numbers[i];

  return total;
}

describe('simpleArraySum', () => {
  it('should pass sample', () => {
    let input = [1,2,3]
    let result = simpleArraySum(input);
    assert.equal(result, 6);
  });
});