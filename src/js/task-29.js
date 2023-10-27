// Задача 29.
// Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб - странице
// и выполняет определенные действия с этими данными, например, отправляет их на сервер или отображает
// всплывающее окно с результатами.

const formNode = document.querySelector('.form2');

const getFormData = (e, formNode) => { 
    e.preventDefault();
    const formData = new FormData(formNode); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь данные
    const name = formData.get('name');
    const surname = formData.get('surname');

    alert(`Данные из формы получены! Ваше имя ${name}, а фамилия ${surname}.`);
}
// or
const getData = (e) => { 
    e.preventDefault();
    const name = formNode.querySelector('.input-name').value;
    const surname = formNode.querySelector('.input-surname').value;

    alert(`Данные из формы получены! Ваше имя ${name}, а фамилия ${surname}.`);
}

// formNode.addEventListener('submit', (e) => getFormData(e, formNode));
formNode.addEventListener('submit', getData);


