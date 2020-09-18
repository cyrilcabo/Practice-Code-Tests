function arrayChange (inputArray) {
	let array = [...inputArray];
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > array[i-1]) continue;
		while (array[i] <= array[i-1]) {
			array[i] += 1;
			counter += 1;
		}
	}
	return counter;
}