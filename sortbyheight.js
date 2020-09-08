function sortByHeight (array) {
	let a = [...array], temp;
	for (let i = 1; i < a.length; i++) {
		if (a[i] === -1) continue;
		for (let j = 0; j < i; j++) {
			if (a[j] === -1) continue;
			if (a[i] < a[j]) {
				temp = a[i];
				for (let k = i-1; k >= j; k--) {
					if (a[k] === -1) continue;
					let counter = 0;
					for (let l = k+1; l <= i; l++) {
						if (a[l]===-1) {
							continue;
						} else {
							a[l] = a[k];
							break;
						}
					}
				}
				a[j] = temp;
				break;
			}
		}

	}
	return a;
}
