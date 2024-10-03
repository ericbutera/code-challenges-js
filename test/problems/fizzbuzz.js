function fizzBuzz(n) {
  const answer = []
  for (let x = 1; x <= n; x++) {
    const isDiv3 = x % 3 === 0;
    const isDiv5 = x % 5 === 0;

    if (isDiv3 && isDiv5) {
      answer.push('FizzBuzz')
    } else if (isDiv3) {
      answer.push('Fizz')
    } else if (isDiv5) {
      answer.push('Buzz')
    } else {
      answer.push(x.toString())
    }
  }

  return answer;
}

const assert = require('assert');
describe('fizzBuzz', () => {
  it('#fizzBuzz', () => {
    assert.deepEqual(fizzBuzz(15), [
      '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
      '11', 'Fizz', '13', '14', 'FizzBuzz'
    ])
  })
})

/*
next steps:

const isDivByN = (num, divisor) => num % divisor
const isDivBy3 = (num) => isDivByN(num, 3)
const isDivBy5 = (num) => isDivByN(num, 5)
const range = (n) => Array(n).map((x, y) => x + y)

let n = 5;
range(5).map(n => {
  const is3 = isDivBy3(n)
  const is5 = isDivBy5(n)
  if (is3 && is5) {
    return 'FizzBuzz';
  } else if (is3) {
    return 'Fizz'
  } else if (is5) {
    return 'Buzz';
  }
  return x.toString();
})
*/