function commonCharacterCount(s1, s2) {
    let str1 = unique([...s1]), str2 = unique([...s2]);
    return compare(str1, str2);
}

function unique (arr) {
	let res = {};
	for (let i = 0; i < arr.length; i++) {
		res = {
			...res,
			[arr[i]]: (res[arr[i]] || 0)+1,
		}
	}
	return res;
}

function compare (obj1, obj2) {
	let keys = Object.keys(obj1);
	let result = 0;
	for (let i = 0; i < keys.length; i++) {
		if (obj1[keys[i]] && obj2[keys[i]]) {
			result += Math.min(obj1[keys[i]], obj2[keys[i]]);
		}
	}
	return result;
}