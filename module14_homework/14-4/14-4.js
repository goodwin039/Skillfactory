// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

// При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL  https://dummyimage.com/100x300/, где первое число — ширина картинки, второе — высота.

let btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    const input1 = document.querySelector(".input1").value;
    const input2 = document.querySelector(".input2").value;
    const outputDiv = document.getElementById("result");

    if ((Number(input1)<100 || Number(input1)>300) || (Number(input2)<100 || Number(input2)>300) || (isNaN(input1) || isNaN(input2))) {
        outputDiv.innerText = `«одно из чисел вне диапазона от 100 до 300»`;
    }else{
        outputDiv.innerText = ` `;
       
        // Делаем запрос за данными
        fetch(`https://dummyimage.com/${input1}x${input2}/`)
            .then((response) => {
            // Объект ответа на запрос
            console.log('response', response);
            // Превращаем объект в JSON. Мы не можем его сразу прочитать,
            // надо отдать в следующий then
            const result = response.json();
            console.log('result', result);
            return result;
            })
            .then((data) => {
            // Объект результата в формате JSON
            console.log(data);
            })
            .catch(() => { console.log('error') });

    }
});

