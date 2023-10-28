// Задача 25.
// Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент,
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

const createParagraph = (text, parentNode) => { 
    // Создаем paragraph и заполняем переданным контентом
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    // Указываем нужные стили
    paragraph.style.border = '1px dashed green';
    paragraph.style.width = 'max-content';
    paragraph.style.padding = '10px';

    // Вставляем созданный элемент paragraph в переданную parentNode
    parentNode.appendChild(paragraph);
}


// Находим ноду, куда добавим новый элемент
const parentNode = document.querySelector('.task25');
createParagraph('Элемент создан через JS', parentNode);
