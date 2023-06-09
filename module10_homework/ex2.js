let x = 1;
        if(typeof(x) == 'number') console.log('x - число');
        x = Boolean(x);
        if(typeof(x) == 'boolean')console.log("х - логический тип");
        x = String(x);
        if(typeof(x) == 'string') {console.log('x - строка');}
        x = Symbol(x);  
        if(typeof(x) == 'symbol')console.log('Тип x не определён');    