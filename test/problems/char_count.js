/*
Write a function that counts the number of times a character is repeated in a row.
Return a new string in the format `{count}{character}`.

If the character is repeated only once, then do not add a number after it.
If a character is repeated more than once, then add the number of times it is repeated after the character.

*/

function char_counter(input) {
  let output = ''
  let count = 1;
  for (let x = 0; x < input.length; x++) {
    let current = input[x];

    // TODO check if next is out of bounds
    // note: this works in JS because undefined is returned when out of bounds which is falsy therefore current will not equal next
    let next = input[x + 1];
    if (current == next) {
      count++;
    } else {
      output += `${count > 1 ? count : ''}${current}`
      count = 1;
    }
  }
  return output
}

const assert = require('assert');
describe('char_counter', () => {
  it('#char_counter', () => {
    assert.equal(char_counter('feeeeggghhoobb'), 'f4e3g2h2o2b')
    assert.equal(char_counter('a'), 'a')
    assert.equal(char_counter('aa'), '2a')
    assert.equal(char_counter('aaabbca'), '3a2bca')
  })
})
