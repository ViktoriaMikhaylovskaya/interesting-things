// Задача 28.
// Создать и добавить элемент с использованием шаблонов:
// Напишите функцию, которая создает новый элемент с использованием шаблонов(например, с помощью тега < template >);
// и добавляет его в DOM.

// Находим ноду, в которую добавим шаблон
const parentNode = document.querySelector('.wrapper-for-template');

const createElement = (parentNode) => { 
    let elem = document.createElement('div'); // Создаем элемент
    
    elem.append(template.content.cloneNode(true)); // Копируем контент с шаблона и добавляем в созданный элемент

    parentNode.append(elem); // Добавляем элемент в DOM
}

createElement(parentNode);
