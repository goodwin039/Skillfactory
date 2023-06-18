function firstFunction(number){
    return secondFunction(number)
}

function secondFunction(number){
    let sum = number + number;
    return sum; 
}

let val1 = 1;

console.log(firstFunction(val1));