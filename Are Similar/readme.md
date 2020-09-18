Are Similar

Given an two arrays of integers, check if they are similar. You are allowed to swap at most 2 elements in one of the two arrays to make them similar. Return TRUE if arrays are similar, otherwise, return FALSE.

Example:


1. areSimilar([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]) =>  TRUE

2. areSimilar([1, 2, 5, 4, 3], [1, 2, 3, 4, 5]) => (Swap 3RD and 5TH element in firstArray) => ([1, 2, 3, 4, 5] === [1, 2, 3, 4, 5]) => TRUE

3. areSimilar([1, 4, 10, 2, 3], [1, 2, 3, 4, 10]) => (You are only allowed to swap 2 elements in one array) => FALSE