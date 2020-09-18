# Array Change

You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example:

```
1. arrayChange([1, 2, 3, 4, 5]]) =>  (Array already in ascending order) => 0

2. arrayChange([1, 2, 5, 4, 3]) => (add 2 to 4, add 4 to 3) => [1, 2, 5, 6, 7] => 6

3. arrayChange([10, 0, 25, 100]) => (add 11 to 0) => 11
```