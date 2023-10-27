// Задача 12. 
// Задача на работу с объектами: создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как: название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

const book = {
    name: 'Бусидо. Кодекс самурая',
    author: 'Ямамото Цунэтомо',
    yearPublishing: 2023,

    getAllInfo() {
        return `${this.author}: ${this.name} (${this.yearPublishing})`
    },

    changeYearPublishing(year) { 
        this.yearPublishing = year;
    },

    addDescription(text) { 
        this.description = text;
    }
}

// Получаем нужную информацию из объекта:
// console.log(book.getAllInfo());
// console.log(book.yearPublishing); // 2023

// Изменяем уже имеющийся год выпуска книги:
// book.changeYearPublishing(2020);
// console.log(book.yearPublishing); // 2020

let description = 'Бусидо (в переводе «путь воина») — самурайский кодекс, набор законов, требований и правил поведения настоящего самурая в обществе, в сражении и в одиночестве.'

// console.log(book.description); // undefined, так как в объекте нет description
// console.log(book.addDescription(description)); // Используем метод для добавления описания книги
// console.log(book.description); // Теперь можем получить описание

