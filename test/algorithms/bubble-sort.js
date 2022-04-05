/*
TODO create code example
## Bubble Sort
n repeat until done
  n steps moving forward
  + 1 for swapping

  or is it n*2?
n^n

- two significant steps p.54
  - _comparisons_ - two numbers compared to determine greatest
    - for 5 elements
    - 4 + 3 + 2 + 1 = 10 comparisons, it counts down by 1 each loop
    - (n-1) + (n-2) + (n-3) ... + 1
  - _swaps_ - two numbers swapped to perform sort
    - one swap per element: n
- worst case
  - 20 steps for 5 elements
  - _comparison_ + _swaps_ = n^2

elements  steps   n^2
5         20      25
10        90      100
20        380     400
40        1560    1600
80        6320    6400

## Exercises p.60
1. Fill in the table
elements  O(n)    O(log n)    O(n^2)
100       100     6.6         10,000
2000      2000    10.9        4,000,000

The book says the O(log n) column should round up: so 6.6->7; 10.9->11

2. 16 elements is n^2 on 256 steps
how to reverse 256 into 16? sqrt 256 = 16

3. no return, so the entire array is looped and looped
O(n^2)

4. write script to convert O(n^2) into O(n)
*/