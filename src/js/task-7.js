// Задача 7. 
// Задача о коллекции функций: у вас есть массив функций, напишите код,
// который вызовет каждую функцию в этом массиве и выведет их порядковый номер.
// Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.

const functionsArray = [
    (num) => console.log(num),
    (num) => console.log(num),
    (num) => console.log(num),
    (num) => console.log(num),
    (num) => console.log(num),
];

// Вариант 1.
const callFunctions = (arr) => { 
    for (let i = 0; i < arr.length; i++) { 
        arr[i](i);
    }
}

// Вариант 2.
const getFnNumber = (arr) => arr.forEach((func, i) => func(i));

// getFnNumber(functionsArray);
// callFunctions(functionsArray);
