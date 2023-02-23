function solution(crypt, solution) {
  let map = new Map();
  for (let i = 0; i < solution.length; i++) {
    map.set(solution[i][0], solution[i][1]);
  }
  let a = crypt[0];
  let b = crypt[1];
  let c = crypt[2];
  let n = a.length;
  let m = b.length;
  let o = c.length;
  let x = 0;
  let y = 0;
  let z = 0;
  for (let i = 0; i < n; i++) {
    let val = map.get(a[i]);
    if (val === '0' && i === 0 && n > 1) {
      return false;
    }
    x += val * Math.pow(10, n - i - 1);
  }
  for (let i = 0; i < m; i++) {
    let val = map.get(b[i]);
    if (val === '0' && i === 0 && m > 1) {
      return false;
    }
    y += val * Math.pow(10, m - i - 1);
  }
  for (let i = 0; i < o; i++) {
    let val = map.get(c[i]);
    if (val === '0' && i === 0 && o > 1) {
      return false;
    }
    z += val * Math.pow(10, o - i - 1);
  }
  if (x + y === z) {
    return true;
  }
  return false
}
let solution = [
	["O", "0"],
	["M", "1"],
	["Y", "2"],
	["E", "5"],
	["N", "6"],
	["D", "7"],
	["R", "8"],
	["S", "9"],
];
let crypt = ["SEND", "MORE", "MONEY"];
console.log(solution(crypt, solution));
