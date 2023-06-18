let arr = [12, 14, 25, 33, 0, null, 'a', '%', true];
console.log(countElements(arr));

function countElements(arr){
    let counters = {
            even: 0, //чётные
            odd: 0, // не чётные
            zero: 0 // нулевые
    }

    arr.forEach(element => {
        counters.even += isEven(element);
        counters.odd += isOdd(element);
        counters.zero += isZero(element);
    });

    return counters;
}

function isEven(value){
    return isNumeric(value) && (value % 2 === 0) && (value !== 0);
}

function isOdd(value){
    return isNumeric(value) && (value % 2 !== 0) && (value !== 0);
}

function isZero(value){
    return value === 0;
}

function isNumeric(value){
    return (typeof(value) === 'number') && isFinite(value);
}

