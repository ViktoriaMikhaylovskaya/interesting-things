// Задача 15.
// Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await
// для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

const getInfo = async () => {
    try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json());
        const photos = await fetch(`https://jsonplaceholder.typicode.com/users/${users[0].id}`).then(data => data.json());
        return photos;
    } catch (error) {
        console.log('Задание 15. Произошла ошибка при загрузке данных.');
    }
}

getInfo();
