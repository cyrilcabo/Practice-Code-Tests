//define constants
let empty = '.', cell = 'F', obstacle = '#';

function figureUnderGravity(matrix) {
    //find the minimum distance between a cell and an obstacle
    const move = firstObstacle(matrix);

    //it is a good practice to have immutable state, but to reduce the amount of loops, we're not going to use one.
    //let newMatrix = matrix.map(i => i.map(j => j));
    
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === cell) {
              for (let k = j; k < (j+move < matrix.length ?j+move :matrix.length); k++) {
                matrix[k][i] = '.';
              }
              if (j+move < matrix.length) {
                if (matrix[j+move][i] === 'F') {
                  matrix[j+move+1][i] = 'F';
                  j+=1;
                }
                matrix[j+move][i] = 'F';
              }
              j+=move;
            }
        }
    }
    return matrix;
}

function firstObstacle (matrix) {
    let lowestPoint = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
           if (matrix[i][j]=== cell) {
             lowestPoint = j > lowestPoint ?j :lowestPoint;
           }
           if (matrix[i][j] === obstacle) {
               for (let k = i-1; k >= 0; k--) {
                   if (matrix[k][j] === cell) {
                       return i-k-1;
                   }
               }
           }        
        }
    }
    return matrix.length-1-lowestPoint;
}


const sampleMatrix = [
  ['F', 'F', '.'],
  ['.', 'F', 'F'],
  ['#', '.', '.'],
  ['.', '.', '.']
];

const anotherMatrix = [
  ['F', 'F', '#'],
  ['.', 'F', '.'],
  ['#', '.', '.'],
  ['.', '.', 'F']
];

const blankSample = [
  ['F', 'F', '.'],
  ['.', 'F', '.'],
  ['.', '.', 'F'],
  ['.', '.', '.']
];

figureUnderGravity(sampleMatrix);

//Result:
/*
  [
    [".", ".", "."],
    ["F", "F", "."],
    ["#", "F", "F"],
    [".", ".", "."],
  ]
*/