// Задача 28.
// Создать и добавить элемент с использованием шаблонов:
// Напишите функцию, которая создает новый элемент с использованием шаблонов(например, с помощью тега < template >);
// и добавляет его в DOM.
const parentNode = document.querySelector('.wrapper-for-template');

const createElement = (parentNode) => { 
    let elem = document.createElement('div');
    
    elem.append(template.content.cloneNode(true));

    parentNode.append(elem);
}

createElement(parentNode);
