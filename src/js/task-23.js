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
    let percent = 0;

    if (regForNumbers.test(inputValue)) {
        percent += 25;
    }

    if (regForBigLetters.test(inputValue)) {
        percent += 25;
    }

    if (regForSmallLetters.test(inputValue)) {
        percent += 25;
    }

    if (regForSymbols.test(inputValue)) {
        percent += 25;
    }

    switch (percent) { 
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

inputNode.addEventListener('input', passwordAnalisys);

resetButton.addEventListener('click', () => { 
    evaluationPasswordNode.style.width = '0%';
    evaluationPasswordNode.style.backgroundColor = 'transparent';
});
