// Задача 22. Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат.

// Ответ:
// 20 раз, в Google Chrome - 21.
// Это ограничение было добавлено, потому что если вызвать document.write после того, как документ уже загружен
// вся существующая страница стирается, а на ее место выводится переданная строка, и это повторяется снова и снова.
 
// Статья: https://habr.com/ru/articles/305366/