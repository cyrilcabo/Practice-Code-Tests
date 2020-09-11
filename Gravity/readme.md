#Gravity

CELL = 'F', EMPTY_SPACE = '.', OBSTACLE = '#'

Given a 2D array, simulate gravity by letting CELLS fall through EMPTY_SPACE, and only stop when the first CELL hits the nearest OBSTACLE.

Example:

const sampleMatrix = [
  ['F', 'F', '.'],
  ['.', 'F', 'F'],
  ['#', '.', '.'],
  ['.', '.', '.']
];

gravity(sampleMatrix);

//Result:
/*
  [
    [".", ".", "."],
    ["F", "F", "."],
    ["#", "F", "F"],
    [".", ".", "."],
  ]
*/


const anotherMatrix = [
  ['F', 'F', '#'],
  ['.', 'F', '.'],
  ['#', '.', '.'],
  ['.', '.', 'F']
];

figureUnderGravity(sampleMatrix);

//Result:
/*
	[
		['.', '.', '#'],
		['F', 'F', '.'],
		['#', 'F', '.'],
		['.', '.', '.']

	]
*/