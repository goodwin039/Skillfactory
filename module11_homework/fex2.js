function isPrimeNumber(number){  
    if(typeof(number) === "number" && isFinite(number)){
        if(number < 2) return "Введите число больше или равное 2";
        else{
            if(number > 1000) return "Введите число меньше 1000";
            else {
                if(number === 2) return true;
                else{
                    for(let i = 2; i < number; i++){
                        if(number % i === 0) return false;
                        else return true;
                    }
                }
            }
        }
    }else return "Вы ввели символ";
}

let input = prompt("Введите целое натуральное число больше единицы");
input = parseInt(input);
console.log(isPrimeNumber(input));