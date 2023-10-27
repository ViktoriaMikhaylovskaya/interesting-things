// Задача 13.
// Задача на классы и наследование: создайте базовый класс Shape(фигура), который имеет методы для расчета площади и периметра.
// Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник.
// Реализуйте методы расчета площади и периметра для каждой фигуры.

// Выполнение этой задачи в JS не имеет смысла, так как у классов фигур есть свои методы для расчета площади и периметра.
// Создаем экземпляр каждого класса и можно вызывать их методы. Общий класс Shape здесь бы никак не использовался, но я 
// добавила метод getMainInfo, чтобы показать как классы могут наследоваться друг от друга. Наример, Rectangle не имеет метода 
// getMainInfo, но так как Rectangle наследуется от Shape, то имеет доступ к его методам.

class Shape {
    getMainInfo() { 
        console.log('Метод класса Shape. Будет у других классов, которые наследуются от него.');
    }
}

class Rectangle extends Shape { // прямоугольник
    getArea(lenght, width) { 
        return lenght * width;
    };

    getPerimeter(a, b) { 
        return 2 * (a + b);
    };
};

class Circle extends Shape { // круг
    getArea(radius) { 
        return Math.PI * Math.pow(radius, 2);
    };

    getPerimeter(radius) { 
        return 2 * radius * Math.PI;
    };    
};

class Triangle extends Shape { // треугольник
    getArea(a, b, c) { 
        return 1 / 2 * a * b * Math.sin((c * Math.PI) / 180);
    };

    getPerimeter(a, b, c) { 
        return a + b + c;
    };
} 

// Пример:
const rectangle = new Rectangle(); // Создаем экземпляр класса
// rectangle.getMainInfo(); // обращаемся к методу класса, от которого наследуется класс Rectangle и не получаем ошибки
// console.log(rectangle.getArea(50, 50)); // обращаемся к методу самого класса Rectangle, получаем результат 2500

// Если бы мы использовали TS, то это бы приобрело смысл.
// Определяем что Shape это интерфейс, и у него есть метод, который возвращает строку.
// interface Shape {
//   calculateArea(): number;
// }

// Когда мы создаем класс, мы можем сказать, что он является имплементацией Shape, значит нам нужно этот метод определить.

// class Rectangle implements Shape {
//   private width: number;
//   private height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   public calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle(5, 10);

// console.log(rectangle.calculateArea()); // Output: 50
// console.log(circle.calculateArea());
