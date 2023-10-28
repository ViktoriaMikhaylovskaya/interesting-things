// Задача 23.
// Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля.
// Необходимо анализировать длину пароля, использование различных символов, наличие чисел и букв в разных регистрах.
// Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

const inputNode = document.querySelector('.form__input');
const evaluationPasswordNode = document.querySelector('.form__evaluation');
const saveButton = document.querySelector('.form__save-button');
const resetButton = document.querySelector('.form_reset-button');

const regForNumbers = /[0-9]/;
const regForBigLetters = /[A-Z]/;
const regForSmallLetters = /[a-z]/;
const regForSymbols = /[-().^+@_"?><{};:|%*$#!~=&]/;

const passwordAnalisys = (e) => {
    const inputValue = e.target.value;
    let percent = 0; // сложность пароля в процентах

    if (regForNumbers.test(inputValue)) { // проверка на наличие цифр
        percent += 25;
    }

    if (regForBigLetters.test(inputValue)) { // проверка на наличие букв в верхнем регистре
        percent += 25;
    }

    if (regForSmallLetters.test(inputValue)) { // проверка на наличие букв в нижнем регистре
        percent += 25;
    }

    if (regForSymbols.test(inputValue)) { // проверка на наличие символов
        percent += 25;
    }

    switch (percent) { // визуально выделяем сложность введенного пароля в зависимости от %
        case 25:
            evaluationPasswordNode.style.width = '25%';
            evaluationPasswordNode.style.backgroundColor = 'red';
            break;
        case 50: 
            evaluationPasswordNode.style.width = '50%';
            evaluationPasswordNode.style.backgroundColor = '#db7a25';
            break;
        case 75: 
            evaluationPasswordNode.style.width = '75%';
            evaluationPasswordNode.style.backgroundColor = '#dbc81a';
            break;
        case 100: 
            evaluationPasswordNode.style.width = '100%';
            evaluationPasswordNode.style.backgroundColor = 'green';
            break;
        default: 
            evaluationPasswordNode.style.width = '0%';
            evaluationPasswordNode.style.backgroundColor = 'transparent';
    }

    if (percent > 50) {
        saveButton.disabled = false;
    } else { 
        saveButton.disabled = true;
    }
};

inputNode.addEventListener('input', passwordAnalisys); // обработчик, срабатывает при изменении в поле ввода

resetButton.addEventListener('click', () => { // обработчик для сбрасывания стилей при нажатии на кнопку "Очистить"
    evaluationPasswordNode.style.width = '0%';
    evaluationPasswordNode.style.backgroundColor = 'transparent';
});
