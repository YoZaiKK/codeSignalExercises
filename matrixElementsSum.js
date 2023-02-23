function solution(matrix) {
	var total = 0;
  var tam = matrix[0].length
	for (let i = 0; i < tam; i++) {
		if (matrix[0][i] > 0) {
			let j = 0;
      // console.log(matrix[0][i]); 
      while (j < matrix.length && matrix[j][i] > 0) {
        total += matrix[j][i];
        j++;
      }
		}
	} 
	return total;
}

const values = [
	[0, 1, 1, 2],
	[0, 5, 0, 0],
	[2, 0, 3, 3],
]; // 9
console.log('sol: '+solution(values));
