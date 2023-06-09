let arr = ["a","b","c","d","e"];
        // let arr = ["a","a","a","a","a"];
        let meaning = true;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] !== arr[i+1]){
                meaning = false;
            } 
        }
        console.log(meaning);