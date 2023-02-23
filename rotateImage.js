function solution(a) {
	console.log(a);
	let n = a.length;
	let b = [];
	for (let i = 0; i < n; i++) {
		b[i] = [];
		for (let j = 0; j < n; j++) {
			b[i][j] = a[n - j - 1][i];
		}
	}
	return b;
}
a = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(solution(a));
