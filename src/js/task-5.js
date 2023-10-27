// Задача 5.
// Разработайте функцию преобразования JSON в связный список.На входе функция должна получать JSON,
// содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

// В данной задаче мы проходимся по списку с конца, так будет легче с каждой итерацией оборачивать 
// и записывать объект в другой объект.

function printList(list) {
  let res = { value: list[list.length-1], next: null };

  for (let i = list.length-1; i >= 0; i--) {
    res = { next: { value: list[i], ...res }};
  }

  return res;
}

const input = [
  { age: 10 },
  { name: 'j' },
  { age: 12 },
  { name: 'kkk' },
];

// console.log(printList(input));
// Результат:
// {
//   next: {
//     value: { age: 10 },
//     next: {
//       value: { name: 'j' },
//       next: {
//         value: { age: 12 },
//         next: {
//           value: { name: 'kkk' },
//           next: null,
//         }
//       }
//     }
//   } 
// }