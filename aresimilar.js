function areSimilar(a, b) {
	if (a.length !== b.length) return false;
    let counter = 0, 
    	distance,
    	wrong = [], 
    	tempRes = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            counter++;
            wrong = [...wrong, i];
        }
        if (counter === 2) {
        	distance = wrong[1]-wrong[0];
    		if (a[i-distance] === b[i] && b[i-distance] === a[i]) tempRes = true;
        }
        if (counter > 2) return false;
    }
    if ((counter === 2 && !tempRes) || counter === 1) return false;
    return true;
}