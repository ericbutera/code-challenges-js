// strings
console.log('slice(start,end) %o', 'how now brown cow'.slice(4)) // now brown cow
console.log('substring(start,end) %o', 'how now brown cow'.substring(4, 7)) // now

// iteration
const fruits = ['apple', 'orange', 'pear']
for (let value of fruits) { /* apple,orange,pear */ console.log('for value %o', value); }
for (let index in fruits) { /*0,1,2*/ console.log('for index %o', index); }
fruits.forEach((value, index) => console.log('forEach value %o index %o', value, index))

// array functions
console.log('indexOf %o', ['zero', 'one', 'two'].indexOf('two')) // 2
console.log('includes %o', fruits.includes('apple')) // true
console.log('concat %o', [1, 2].concat([3])) // [1,2,3]
console.log('slice %o', fruits.slice(0, 1)) // ['apple']
console.log('slice negative %o', fruits.slice(-1)); // ['pear']
console.log('sort %o', ['b', 'a', 'c'].sort()); // [a,b,c]
console.log('desc sort %o', ['b', 'a', 'c'].sort((a, b) => b.localeCompare(a))); // [c,b,a]
console.log('desc sort number %o', [1, 2, 3].sort((a, b) => b - a));
console.log('filter %o', [1, 2, 3, 4].filter((val) => val % 2 === 0)) // [2,4]
console.log('map %o', [1, 2, 3].map((val) => val + 1)) // [2,3,4]
console.log('reduce %o', [1, 2, 3].reduce((total, val) => total + val, 0)) // 6

// object
console.log('Object.keys %o', Object.keys({ a: 1, b: 2, c: 3 })) // [a,b,c]
console.log('Object.values %o', Object.values({ a: 1, b: 2, c: 3 })) // [1,2,3]
console.log('Object.entries %o', Object.entries({ a: 1, b: 2 })) // [ [a, 1], [b, 2], ]
Object.entries({ a: 1, b: 2 }).forEach(([k, v]) => console.log(`${k}:${v}`)) // a:1 b:2

// hackerrank examples
console.log('palindrome %o', 'racecar' === 'racecar'.split('').reverse().join(''))
console.log('reverse words "%o"', ('usds quiz practice'.split(' ').reverse().join(' ')))

class Song {
  constructor(title) {
    this.title = title;
  }
  play() {
    console.log(`playing "${this.title}"`)
  }
}

let s = new Song('happy birthday class')
s.play()

const songFactory = (title) => {
  return {
    title: title,
    play() {
      console.log(`playing "${this.title}"`)
    }
  }
}
let s2 = songFactory('happy birthday factory')
s2.play()
