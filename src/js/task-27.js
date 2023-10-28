// Задача 27.
// Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб - странице,
// например, плавное изменение его положения или размера.


// Находим ноду, чье положение будем изменять
const nodeForAnimation = document.querySelector('.animation');

const addAnimation = (node) => {
    // Функция для изменения положения элемента
    const changePosition = () => { 
        // Каждый раз будем рандомно получать номер точки (3 варианта)
        const variant = Math.floor(Math.random() * 3);
        
        node.style.transition = '2s'; // плавное изменение
        node.style.position = 'absolute';
        
        // добавляем необходимые стили в зависимости от полученного варианта
        if (variant === 1) {
            node.style.top = '10%';
            node.style.left = '10%';
        } else if (variant === 2) {
            node.style.top = '40%';
            node.style.left = '70%';
        } else { 
            node.style.top = '70%';
            node.style.left = '10%';
        }
    }
    // Передаем функцию в setInterval, позиция элемента будет изменяться каждые 1000ms
    setInterval(changePosition, 1000);
}

addAnimation(nodeForAnimation);
