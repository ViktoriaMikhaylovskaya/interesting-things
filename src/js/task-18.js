// Задача 18. Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

const pause = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));

// Создаем строку размера 1МБ, 1КБ и 1 Байт.
const BINARY_UNITS = new Map([
["Mb", "x".repeat(1024 * 1024)],
["Kb", "x".repeat(1024)],
["byte", "x"],
]);


const checkLocalStorageSize = (
    async () => {
        localStorage.clear(); // очищаем localStorage
        await pause(100);
        let result = []; // для записи результата
        
        // fillSpace это метка- используется в catch, чтобы продолжить итерировать по массиву
        fillSpace: for (const key of BINARY_UNITS.keys()) {        
            let i = 0;

            // Заполняем localStorage мегабайтами. Как только мы получаем ошибку (т.е. целый мегабайт уже не лезет) - 
            // мы берем строку поменьше и начинаем заполнять, пока снова не получим ошибку.
            while (true) {
                i++;
                try {
                    localStorage.setItem(`${key}${i}`, BINARY_UNITS.get(key));
                    await pause(1);
                } catch (e) {
                    console.error(e);
                    result.push(`${i - 1}${key}`);
                    continue fillSpace;
                }
            }
        }

        console.log(result); // вернется ['4Mb', '1019Kb', '15byte'] - Chrome, Yandex
    }
);
