function palindromeRearranging(inputString) {
	let obj = {}, 
		total = inputString.length, 
		odd = 0, 
		keys = [];
	for (let i = 0; i < total; i++) {
		obj = {
			...obj,
			//Count occurences of each character
			[inputString[i]]: obj[inputString[i]] ?obj[inputString[i]]+1 :1,
		}
	}
	keys = Object.keys(obj);
	for (let j = 0; j < keys.length; j++) {
		//count how many characters have odd occurences
		if (obj[keys[j]]%2 !== 0) odd++;
		if (odd > 1) return false;
	}
	return true;
}


const test1 = 'abbc', //false
	test2 = 'abba', //true
	test3 = 'cccabaccc', //true
	test4 = 'ccccabaccc'; //false