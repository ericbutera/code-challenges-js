// https://www.hackerrank.com/challenges/array-left-rotation/problem

var assert = require('assert');

function rotateLeft(d, arr) {
  return rotateLeftQuadratic(d, arr);
}

function rotateLeftQuadratic(d, arr) {
  // rotate quadratic:
  let max = Math.max(arr.length - 1, 0); // ensure bounds within array (in case no data)
  for (let rotation = 0; rotation < d; rotation++) {
    let storage = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i]
    }

    arr[max] = storage;
  }

  return arr;
}

function rotateLeftLinear(d, arr) {
  // linear could be by using a "swap" technique

  // or take cell and move it d times to the left
  // d = 2
  // [ ][ ][X]
  // [X][ ][ ]

  // rotate 4 times:
  // 1 [ ][ ][X]
  // 2 [ ][X][ ]
  // 3 [X][ ][ ]
  // 4 [ ][ ][X]
}

describe('rotateLeft', () => {
  /*it('should pass 1', () => {
    let arr = [1, 2, 3];
    let d = 1;
    let result = rotateLeft(d, arr);
    assert.deepEqual(result, [2, 3, 1]);
  });*/

  it('should pass sample', () => {
    let arr = [1, 2, 3, 4, 5];
    let d = 2;
    let result = rotateLeft(d, arr);
    assert.deepEqual(result, [3,4,5,1,2]);
  });

});