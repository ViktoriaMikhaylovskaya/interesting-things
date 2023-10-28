// Задача 14.
// Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис,
// который возвращается с данными об изображении, когда оно загружено.

const url1 = 'https://i.pinimg.com/564x/54/9a/d9/549ad98b6ea17401c254da5c4c66c939.jpg';
const url2 = 'https://i.pinimg.com/564x/50/a5/65/50a5656db065f7c395d8e675307d7575.jpg';
const url3 = 'https://i.pinimg.com/564x/65/fd/b8/65fdb83063ed6612301b107b7585146e.jpg';

const getImgInfo = async (imgUrl) => { // async всегда возвращает промис
    try {
        const response = await fetch(imgUrl);
        return response; // возвращает полученные данные
    } catch (error) {
        console.log('Задание 14. Не удалось загрузить изображение по указанному пути: ', imgUrl);
    }
}

getImgInfo(url1); // Картинку можно посмотреть во вкладке Network
