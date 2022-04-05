/*
TODO create code example
## Selection Sort
- selection sort uses a technique where it has two loops
  - the inner loop always resumes from the previous cell
  - [1,2,3,4] then [2,3,4] then [3,4] then [4]
- keep track of the lowest number encountered
- if the number at index is less than, update the lowest encountered number
- at the end, swap the lowest encountered number into the slot started with
- contains two steps:
  - comparisons: (N - (loop index+1)) + 1
  - swaps: 1 per pass-thru
- selection sort takes about half the steps of bubble sort
- in big-oh, selection sort & bubble have the same runtime of O(n^2)
- big-o ignores constants p.72
  - N / 2 = O(n)
  - 2n steps or N * 2 = O(n)
  - N^2 + 10 = O(n)
- an analogy is comparing "homes"
  - imagine a 3 story house
  - imagine a penthouse in a skyscraper
  - would one say i have this building that is 3 stories vs this building that is 150 stories?
  - they are different categories altogether
  - O(n) and O(n^2) are like that; such a gap that they're different categories
- even 10000N doesn't matter because eventually a dataset will be large enough that N^2 becomes unfathomably large
- exponential growth O(n^2) is a completely different category than straight growth O(n)
-

```javascript
/ *
comparisons:
pass  comparisons
1     4
2     3
3     2
4     1

swaps: 1

bubble sort vs selection p.71
elements  bubble-steps  selection-steps
5         20            14 (10 compare + 4 swap)
10        90            54 (45 + 9)
20        380           199 (180 + 19)
40        1560          819 (780 + 39)
80        6320          3239 (3160 + 79)

4,2,7,1,3 start index 0; lowest 4; lowest 2; lowest 1; swap 4 & 1
1,2,7,4,3 start index 1; lowest 2; already sorted
1,2,3,4,7 start index 2; lowest 7; lowest 4; lowest 3; swap 3 and 7
* /
function selectionSort(array){ // p.69
  for (let i=0; i < array.length; i++) {
    let lowestNumberIndex = i;
    for (let j=i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    if (lowestNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
}
```
*/