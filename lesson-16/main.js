// Задача 1
function calculateFinalPrice(basePrice, discountPercentage, taxRate) {
  return (basePrice - (basePrice * discountPercentage) / 100) * (1 + taxRate);
}
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2
function checkAccess(userName, password) {
  if (userName === "admin" && password === "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}
console.log(checkAccess("admin", "123456"));

// Задача 3
function getTimeOfDay(time) {
  if (time <= 5) {
    return "Ночь";
  } else if (time >= 6 && time <= 11) {
    return "Утро";
  } else if (time >= 12 && time <= 17) {
    return "День";
  } else if (time >= 18 && time <= 23) {
    return "Ночь";
  } else {
    return "Некорректное время";
  }
}
console.log(getTimeOfDay(16));

// Задача 4
function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      console.log(i);
      return;
    }
  }
  console.log("Нет четных чисел");
}
findFirstEven(9, 16);
