function solution(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let rows = [];
  let cols = [];
  let boxes = []; // 3x3 boxes  
  for (let i = 0; i < n; i++) {
    rows[i] = [];
    cols[i] = [];
    boxes[i] = [];
  } 
  for (let i = 0; i < n; i++) { // rows 
    for (let j = 0; j < m; j++) { // cols
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); // 0, 1, 2, 3, 4, 5, 6, 7, 8
      let box = boxes[boxIndex]; 
      let row = rows[i];
      let col = cols[j];
      let val = grid[i][j];
      if (val !== '.') {
        if (box[val] || row[val] || col[val]) { 
          return false;
        }
        box[val] = true;
        row[val] = true;
        col[val] = true;
      }
    }
  }
  return true; 
}
let grid = [
	[".", ".", ".", "1", "4", ".", ".", "2", "."],
	[".", ".", "6", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", ".", ".", "."],
	[".", ".", "1", ".", ".", ".", ".", ".", "."],
	[".", "6", "7", ".", ".", ".", ".", ".", "9"],
	[".", ".", ".", ".", ".", ".", "8", "1", "."],
	[".", "3", ".", ".", ".", ".", ".", ".", "6"],
	[".", ".", ".", ".", ".", "7", ".", ".", "."],
	[".", ".", ".", "5", ".", ".", ".", "7", "."],
];
console.log(solution(grid));