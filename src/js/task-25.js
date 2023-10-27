// Задача 25.
// Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент,
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

const createElement = () => { 
    const parentNode = document.querySelector('.task25');

    const title = document.createElement('p');
    title.textContent = 'Элемент создан через JS';

    title.style.border = '1px dashed green';
    title.style.width = 'max-content';
    title.style.padding = '10px';

    parentNode.appendChild(title);
}

createElement();
