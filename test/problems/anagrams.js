const assert = require('assert')

describe('anagrams', () => {
  it('#areAnagrams', () => {
    assert.equal(areAnagrams('listen', 'silent'), true)
    assert.equal(areAnagrams('listenn', 'silent'), false)
    assert.equal(areAnagrams('listen', 'silen'), false)
    assert.equal(areAnagrams('isten', 'silent'), false)
    assert.equal(areAnagrams('listen', 'silenz'), false)
    assert.equal(areAnagrams('listez', 'silent'), false)
  })
})

/**
 *
 * @param {string} input1
 * @param {string} input2
 * @returns
 */
function areAnagrams(input1, input2) {
  let one = input1.toLowerCase().split('').sort().join('')
  let two = input2.toLowerCase().split('').sort().join('')
  return one === two
}
