// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// Задача 1
const person = {
  name: "Ivan",
  surname: "Federov",
  age: 21,
};

console.log(person.name, person.surname, person.age);

// Задача 2
const isEmpty = function (obj) {
  for (let key in obj) {
    return false;
  }

  return true;
};

console.log(isEmpty());

// Задача 3
const task = {
  title: "Учиться",
  description: "Учить js",
  isCompleted: false,
};

const cloneAndModify = function (object, modification) {
  const newObject = { ...object, ...modification };
  return newObject;
};

const modification = {
  title: "Учится",
  description: "Учить js",
  isCompleted: true,
};

const newTask = cloneAndModify(task, modification);

for (let key in newTask) {
  console.log(key, newTask[key]);
}

// Задача 4
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },

  method2() {
    console.log("Метод 2 вызван");
  },

  method3() {
    console.log("Да это я писал");
  },
  property: "Это не метод",
};

const callAllMethods = function (object) {
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
};

callAllMethods(myObject);
