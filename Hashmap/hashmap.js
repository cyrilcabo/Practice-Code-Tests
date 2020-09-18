function hashMap (queryType, query) {
	let hash = {};
	for (let i = 0; i < queryType.length; i++) {
		if (queryType[i]==="get" && (queryType.length-1) === i)
			return hash[query[i][0]];
		else
			hash = mutation(queryType[i], query[i], hash)
	}
	console.log(hash);
}

function mutation (queryType, query, hash) {
	let keys, tempHash = {};
	switch (queryType) {
		case "insert":
			return {
				...hash,
				[query[0]]: query[1],
			};
		case "addToValue":
			keys = Object.keys(hash);
			keys.forEach((i) => {
				tempHash = {
					...tempHash,
					[i]: hash[i]+query[0],
				}
			});
			return tempHash;
		case "addToKey":
			keys = Object.keys(hash);
			keys.forEach((i) => {
				tempHash = {
					...tempHash,
					[parseInt(i)+query[0]]: hash[i],
				}
			});
			return tempHash;
		default: return hash;
	}
}

let sampleTypes = ["insert", "addToValue", "addToKey", "insert", "get"];

let sampleQueries = [[1, 2], [5, 2], [-1], [2, 4], [2]];