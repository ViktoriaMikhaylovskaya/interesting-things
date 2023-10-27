// Задача 8. 
// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию,
// которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

const getResults = (arr) => { 
    return () => {
        let results = [];
        for (let i = 0; i < arr.length; i++) { 
            let result = arr[i]();
            results.push(result);
        }

        return results;
    }
}

const funcs = [
    () => 3,
    () => 4,
    () => 1,
];

const closing = getResults(funcs);

// console.log(closing()); // [3, 4, 1]
// or
// console.log(getResults(funcs)());
