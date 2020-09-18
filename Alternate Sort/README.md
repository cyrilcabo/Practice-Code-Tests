# Alternate Sort

Given an array of integers, sort the elements in an alternate manner. The first element goes first, the last element goes second, the second element goes next, the second-to-the-last element goes fourth, and so on. If the resulting array is in a STRICTLY increasing order, return TRUE, otherwise, return FALSE.

Example:

```
1. alternateSort([1, 3, 5, 4, 2]) => [1, 2, 3, 4, 5] => TRUE

2. alternateSort([1, 5, 30, 100, 20, 4]) => [1, 4, 5, 20, 30, 100] => TRUE

3. alternateSort([1, 2, 3, 4, 5]) => [1, 5, 2, 4, 3] => FALSE
```