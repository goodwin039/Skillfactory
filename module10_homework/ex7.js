 let arr = [12, 14, 25, 33, 0, null, 'a', '%', true];
        let counterHonest = 0;        //чётное
        let counterOdd = 0;           //не чётное  
        // let counterNumberNull = 0;    // число ноль  
        // let counterNull = 0;          // 'null'
        // let counterSymbol = 0;        // символ
        // let counterBoolean = 0;       // логический
        let someThingUnUsual = 0;     // не определённые

        for(let i = 0; i < arr.length; i++){
            // switch(typeof(arr[i])){
            //     case 'number':
            //         if(isFinite(arr[i])){
            //             if(arr[i] == 0){
            //                 counterNumberNull++;
            //                 break;
            //             }else{
            //                 if((arr[i] % 2) == 0){
            //                     counterHonest++;
            //                     break;
            //                 }else{
            //                     counterOdd++;
            //                     break;
            //                 }
            //             }                        
            //         }else{
            //             counterNull++;
            //             break;
            //         }

            //     case 'symbol':
            //         counterSymbol++;
            //         break;

            //     case 'boolean':
            //         counterBoolean++;
            //         break;

            //     default:
            //         someThingUnUsual++;
            //         break;
            // }

            if(typeof(arr[i]) === 'number'){
                if(isFinite(arr[i])){
                    if(arr[i] == 0){
                        someThingUnUsual++;
                    }else{
                        if((arr[i] % 2) == 0){
                            counterHonest++;
                        }else{counterOdd++;}
                     }
                }else{someThingUnUsual++;}
            }
        }
        console.log("Колличество чётных чисел: " + counterHonest +"\n"+"Колличество не чётных чисел: "+counterOdd+"\n"+"Колличество нулей: "+someThingUnUsual);