// Задача 27.
// Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб - странице,
// например, плавное изменение его положения или размера.

const nodeForAnimation = document.querySelector('.animation');

const addAnimation = (node) => {
    setInterval(() => { 
        const variant = Math.floor(Math.random() * 3);
        
        node.style.transition = '2s';
        node.style.position = 'absolute';
        
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
    }, 1000);
}

addAnimation(nodeForAnimation);
