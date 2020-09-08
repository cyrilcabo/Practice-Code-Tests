function matrixElementsSum(matrix) {
	let skip = [];
	let result = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (compare(skip, j)) continue;
			if (matrix[i][j] === 0) {
				skip.push(j);
				continue;
			}
			result += matrix[i][j];
		}
	}
	return result;
}

function compare (arr, e) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === e) return true;
	}
}