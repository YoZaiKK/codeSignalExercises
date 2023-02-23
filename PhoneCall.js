function solution(min1, min2_10, min11, s) {
	if (s >= min1) s -= min1;
	else return 0; 
 
	if (s >= min2_10 * 9) s -= min2_10 * 9;
	else return 1 + Math.floor(s/min2_10);

	return 1 + 9 + Math.floor(s / min11);
}

const values = [1,2,1,6];
console.log(solution(...values));
// console.warn('some warning');