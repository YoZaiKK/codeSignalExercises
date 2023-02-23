function solution(s) {
  let a = [] 
  for (let i = 0; i < s.length; i++) {
    if (a[s[i]] === undefined) {
      a[s[i]] = 1
    } else {
      a[s[i]]++
    }
  } 
  for (let i = 0; i < s.length; i++) {
    if (a[s[i]] === 1) {
      return s[i]
    }
  }
  return '_'
} 
let s = 'abacabad'
console.log(solution(s))