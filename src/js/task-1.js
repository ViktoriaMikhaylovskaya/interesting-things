// Задача 1. Функция, которая проверяет, является ли заданная строка палиндромом.
// Вариант 1
const isPalindrome = (str) => { 
    let stringWithoutSpace = str.replace(/ /gi, '').toLowerCase(); // Убираем пробелы и преобразуем символы в нижний регистр
    let arr = stringWithoutSpace.split(''); // Разбиваем строку на массив символов.
    let reversArr = arr.reverse(); // Разворачиваем полученный массив.
    let resString = reversArr.join(''); // Возвращаем массив символов в строку.
    let result = resString === stringWithoutSpace; // сравниваем и записываем рузультат.

    return result; // Возвращаем результат.
}

// Вариант 2. Короткий
const checkStringForPalindrome = (str) => { 
    let stringWithoutSpace = str.replace(/ /gi, '').toLowerCase();  // Убираем пробелы и преобразуем символы в нижний регистр
    return stringWithoutSpace === stringWithoutSpace.split('').reverse().join('');
}

isPalindrome('аргентина маниТ негра'); // true
checkStringForPalindrome('аргентина манит негра'); // true
