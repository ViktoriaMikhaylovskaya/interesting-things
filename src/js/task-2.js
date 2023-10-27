// Задача 2. 
// Функция, которая принимает число и возвращает true, если это число является странным,
// и false в противном случае.Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

const func = (number) => { 
    let result = 0;

    if (number < 0) { // проверка является ли число отрицательным
        return false;
    }

    for (let i = 1; i < number; i++) { 
        if (number % i === 0) { // проверка делителя числа
            result += i;
        }
    }

    return result === number;
}

// console.log(func(6)); // true
// console.log(func(28)); // true
// console.log(func(33)); // false
// console.log(func(8128)); // true