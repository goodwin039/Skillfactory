let meaning = prompt('Введите значение');
        if(typeof(+meaning) === 'number'){
            if(isFinite(+meaning) && (meaning != 0)){
                if((meaning % 2) == 0){
                console.log('Чётное число');
                }else{
                    console.log('Не чётное число');
                } 
            }else{console.log('Вы ввели ноль');}           
        }else{alert('Упс, кажется, вы ошиблись')};