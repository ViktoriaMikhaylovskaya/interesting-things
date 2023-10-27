import moment from 'moment';
// Задача 16.
// Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами.
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

export const getActualDate = () => moment().format("dddd, Do MMMM YYYY, h:mm a"); // возвращает актуальную дату

export const getActualTime = () => moment().format('hh:mm'); // возвращает текущее время

export const getCurrentWeekOfYear = () => moment().format('w'); // возвращает текущую неделю
