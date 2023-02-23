function solution(sequence) { 
        // analisis para si es un array con 4 o mas elementos
    var occurence = 0 
    for(let i = 0; i< sequence.length; i++){ 
        if(sequence[i] <= sequence[i-1]){
            occurence++
            if(occurence > 1)
                return false
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1])
                return false
        }
    }  
    return true
}

const values = [10, 1, 2, 3, 4, 5]
console.log(solution(values))
 