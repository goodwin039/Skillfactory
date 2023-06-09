let map = new Map([
                ["1", "car"],
                ["2", "dog"],
                ["3", "apple"]
        ]);
        
        map.forEach((value, key, map) => {
            console.log(`Ключ - ${key}, значение - ${value}`);
        });