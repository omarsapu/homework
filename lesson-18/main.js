
// Задача 1
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задача 2
const getUserAverageAge = () => {
  let sum = 0;
  users.forEach((user) => {
    sum += user.age;
  });

  return sum / users.length;
};

console.log(getUserAverageAge());

// Задача 3
const getAllAdmins = () => {
  const admins = [];
  users.forEach((user) => {
    if (user.isAdmin === true) {
      admins.push(user);
    }
  });
  return admins;
};

console.log(getAllAdmins());

// Задача 4
const first = (arr, n) => {
  if (n == 0) {
    return [];
  } else if (n === undefined) {
    return [arr[0]];
  }
  const result = [];

  arr.forEach((item, index) => {
    if (index < n) {
      result.push(item);
    }
  });
  return result;
};

console.log(first([0, 20, 30, 40]));