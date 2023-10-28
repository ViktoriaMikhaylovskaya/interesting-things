// Задача 26.
// Задача: Рекурсивный обход дерева DOM: Напишите функцию, которая рекурсивно обходит дерево DOM,
// начиная с указанного элемента, и выполняет определенное действие с каждым узлом(например, выводить информацию о теге в консоль).

const node = document.querySelector('body');

function skipping(node) {
    let numElements = 0; // Счетчик узлов Element
    // Если node есть узел Element, увеличиваем счетчик на 1.
    if (node.nodeType == 1 /* Node.ELEMENT_NODE */) {
        numElements++;
        console.log(node.tagName); // Выводим информацию о теге
    }
    
    let children = node.childNodes; // Получим список дочерних элементов

    for (let i = 0; i < children.length; i++) { // Смотрим все дочерние элементы
        numElements += skipping(children[i]); // Рекурсия по дочерним элементам
    }

    return numElements; // Возвращаем число элементов
}

// skipping(node);
