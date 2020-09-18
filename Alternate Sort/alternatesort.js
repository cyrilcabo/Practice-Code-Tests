function alternateSort (arr) {
	let j = 0, 
		counter = 0,
		sortedArr = [...arr].sort((a,b) => a-b),
		tempArr = [];
	//Check if there's duplicate
	if (checkDuplicate(sortedArr)) return false;
	
	for (let i = 0; i < arr.length; i++) {
		if ((i+1)%2===0) 
			tempArr[i] = arr[(arr.length-1)-(j++)];
		else
			tempArr[i] = arr[j];
		//Check if new array item is equal to sorted array item 
		if (tempArr[i]===sortedArr[i]) counter++;
	}
	//Check if array is sorted
	if (counter===arr.length) return true;
	return false;
}

function checkDuplicate (arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i-1]===arr[i]) return true;
	}
	return false;
}

let sampleArray = [1, 3, 5, 4, 2];

console.log(alternateSort(sampleArray));