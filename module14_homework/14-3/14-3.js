let xhr = new XMLHttpRequest();

let btn = document.getElementById("btn");
btn.addEventListener('click', () => {
  const inputValue = document.getElementById("input").value;
  const outputDiv = document.getElementById('loading-status');
  if (Number(inputValue)<1 || Number(inputValue)>10) {
    outputDiv.innerText = `«число вне диапазона от 1 до 10»`;
  } else{
      outputDiv.innerText = ``;
      // Инициализируем запрос
      xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${inputValue}`);
      
      // Добавляем обрабочик ответа сервера
      xhr.onload = function() {
        if (xhr.status != 200) { // HTTP ошибка?
          // Если статус не 200 (указывает, что запрос выполнен успешно),
          // то обрабатываем отдельно
          console.log('Статус ответа: ', xhr.status);
        } else {
          // Ответ мы получаем в формате JSON, поэтому его надо распарсить
          // console.log('Ответ сервера JSON', xhr.response);

          // Парсим и выводим ответ сервера
          console.log('Результат: ', JSON.parse(xhr.response));
        }
      };

      // Добавляем обрабочик процесса загрузки
      xhr.onprogress = function(event) {
        // Выведем прогресс загрузки
        console.log(`Загружено ${event.loaded} из ${event.total}`)
      };

      // Добавляем обрабочик ошибки
      xhr.onerror = function() {
        // обработаем ошибку, не связанную с HTTP (например, нет соединения)
        console.log('Ошибка! Статус ответа: ', xhr.status);
      };

      // Отправляем запрос
      xhr.send();  
  }  
});








