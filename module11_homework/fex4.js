function twoNumbers(first, second){
    let current = first;
    let interval = setInterval(function(){
        console.log(current);
        if(current === second){
            clearInterval(interval);
        }
        current++;
    },1000);
}

twoNumbers(1,20);