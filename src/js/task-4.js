// Задача 4. Функция, изменяющая окончание слов в зависимости от падежа.

// Объект Intl.PluralRules обеспечивает форматирование с учетом множественного числа и языковые правила, 
// связанные с множественным числом.
const rule = new Intl.PluralRules("ru-RU"); // указываем язык

const format = (n) => {
    // select возвращаeт тег, который представляет форму множественного числа одного или диапазона чисел, 
    // от которых и зависит результат в возвращаемой строке.
    switch (rule.select(n)) {
        case "one": return `${n} мышь`;
        case "few": return `${n} мышки`;
        case "many": return `${n} мышей`;
        case "others": return `${мышки}`;
        default: throw new Error("unknown plural rule");
    }
}

// console.log(Array.from({ length: 21 }, (_, i) => format(i)));
