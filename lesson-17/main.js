

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
