/*
TODO create code example
## Binary Search p.26
- binary search is basically the game deduction
- only possible with ordered array
- each guess step eliminates half the search elements
- use binary search as "search" on ordered array insert
- O(log n)
- find 1-10
1 2 3 4 5 6 7 8 9 10 # guess 5, higher!
6, 7, 8, 9, 10       # guess 8, lower
6, 7                 # guess 6, higher
7                    # guess 7
WIN

size  steps
12    4
25    5
50    6
100   7
200   8
400   9
800   10
1600  11
3200  12
6400  13
12800 14
*/
