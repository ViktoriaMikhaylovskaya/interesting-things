// Задача 3.
// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций:
// вычисление N-го числа в ряду Фибоначчи Ф;
// вычисление всех чисел в ряду Фибоначчи до числа N;
// вычисление N-го просто числа - делятся без остатка только на 1 и на само себя (Примеры простых чисел: 3,5,7,11,17);
// вычисление всех простых чисел до числа N;

class MathX {
  static fibNumber(number) { 
    let prev = 0; // «предыдущее» число в ряде чисел Фибоначчи
    let next = 1; // «текущее» число

    for (let i = 0; i < number; i++){
      // Новое «текущее» число вычисляется как сумма старого(из предыдущей итерации) «текущего» числа 
      // и старого(из предыдущей итерации) «предыдущего» числа. После этого старое «текущее» число 
      // становится новым «предыдущим» числом.
      let temp = next;
      next = prev + next;
      prev = temp;
    }

    return prev;
  }

  static fibNumbers(number) { 
    if (number <= 0) return [];
    if (number === 1 ) return [0];

    // Аналогично fibNumber, только каждую сумму добавляем в массив.
    const result = [0, 1];

    while (true) {
      const sum = result[result.length - 2] + result[result.length - 1];
      if (sum >= number) break;

      result.push(sum);
    }

    return result;
  }

  static primeNumber(number) {
    switch (true) {
      case number <= 1: {
        return false;
      }
      case number <= 3: {
        return true;
      }
      case number % 2 === 0 || number % 3 === 0: {
        return false;
      }
      default: {
        for (let i = 5; i * i <= number; i = i + 6) {
          if (number % i === 0 || number % (i + 2) === 0) {
            return false;
          }
        }

        return true;
      }
    }
  }

  static primeNumbers(number) {
    const result = []; // для сохранения всех простых чисел
    
    nextPrime:
    for (let i = 2; i <= number; i++) { // Для всех i.

      for (let j = 2; j < i; j++) { // проверить, делится ли число.
        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
      }

      result.push(i);
    }

    return result;
  }
}

// console.log('fibNumber', MathX.fibNumber(10)); // 55
// console.log('fibNumbers', MathX.fibNumbers(10)); // [0, 1, 1, 2, 3, 5, 8]
// console.log('primeNumber', MathX.primeNumber(9)); // true
// console.log('primeNumbers', MathX.primeNumbers(10)); // [2, 3, 5, 7]
