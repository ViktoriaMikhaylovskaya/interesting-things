// Задача 6. 
// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }.
// Напишите код, который сортирует этот массив по возрастанию возраста,
//  а при равных возрастах сортирует по алфавиту по полю name.

const users = [
  { name: 'Alex', age: 25, num: 3 },
  { name: 'John', age: 25, num: 4 },
  { name: 'John', age: 24, num: 1 },
  { name: 'Alea', age: 25, num: 2 },
];

const compare = (a, b) => {
  if (a === b) return 0;
  if (a > b) return 1;
  if (a < b) return -1;
}

const sortByAge = (fields, arr) => {
  return arr.sort((a, b) => {
    for (let field of fields) {
      const result = compare(a[field], b[field]);
      
      if (result === 0) continue;
      
      return result;
    }
    
    return 0;
  });
}

// console.log(sortByAge(["age", "name"], users));
