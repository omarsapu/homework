// Вам дано случайное неотрицательное число, и вы должны вернуть цифры этого числа в массиве в обратном порядке.
// Задача 1
function digitize(n) {
  const number = n.toString();

  return number
    .split("")
    .reverse()
    .map((item) => {
      return Number(item);
    });
}

console.log(digitize(35231));

// Дан массив целых чисел. Верните новый массив, в котором каждое значение удвоено.
// Задача 2
function maps(x) {
  const result = x.map((item) => item * 2);
  return result;
}

// В вашем классе был тест, и вы его сдали. Поздравляю!
// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем среднестатистический ученик вашего класса.
// Вы получаете массив с результатами тестов ваших одноклассников. Теперь посчитайте среднее значение и сравните свой результат! Верните true если вы лучше, иначе false!
// Примечание:
// Ваши баллы не включены в массив баллов вашего класса. Не забудьте их при подсчете среднего значения!
// Задача 3
console.log(maps([1, 2, 3]));

function betterThanAverage(classPoints, yourPoints) {
  const result = classPoints.reduce((sum, item) => {
    return (sum += item);
  });
  let average = (result + yourPoints) / (classPoints.length + 1);

  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([3, 4, 6], 5));

// Вам дан массив чисел, верните сумму всех положительных чисел.
// Задача 4
function positiveSum(arr) {
  let summa = 0;
  arr.forEach((element) => {
    if (element > 0) {
      return (summa += element);
    }
  });
  return summa;
}

console.log(positiveSum([-1, 5, 8, -10, 0]));

// Для заданного набора чисел верните аддитивно противоположные значения. Все положительные значения становятся отрицательными, а отрицательные — положительными.
// Задача 5
function invert(array) {
  const newArr = array.map((item) => {
    if (item === 0) {
      return item;
    } else {
    }
    return item * -1;
  });
  return newArr;
}

console.log(invert([-1, 4, 5, 6, 0]));

// Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сообщили, что замок окружен парой могущественных драконов! Чтобы победить каждого дракона, нужно 2 пули. Наш герой понятия не имеет, сколько пуль ему нужно взять с собой. Предположим, что он возьмет определенное количество пуль и пойдет дальше, чтобы сразиться с другим определенным количеством драконов. Сможет ли он выжить?
// Задача 6
function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(4, 9));

// Вам даны length и width 4-стороннего многоугольника. Многоугольник может быть прямоугольником или квадратом.
// Если это квадрат, верните его площадь. Если это прямоугольник, верните его периметр.
// Задача 7
const areaOrPerimeter = function (length, width) {
  if (length === width) {
    return length * width;
  } else {
    return 2 * (length + width);
  }
};

console.log(areaOrPerimeter(6, 10));

// Допишите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное число, а затем суммировала результаты.
// Задача 8
function squareSum(numbers) {
  return numbers
    .map((item) => item ** 2)
    .reduce((acc, element) => {
      return (acc += element);
    }, 0);
}

console.log(squareSum([3, 8, 9, 5]));

// Дан массив целых чисел в виде строк и чисел. Верните сумму значений массива, как если бы все они были числами.
// Задача 9
function sumMix(x) {
  return x.reduce((acc, element) => {
    return (acc += +element);
  }, 0);
}

console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));

// Вы пишете код для управления светофорами в вашем городе. Вам нужна функция, которая будет обрабатывать каждое изменение с green, на yellow, на red, а затем снова на green.
// Напишите функцию, которая принимает в качестве аргумента строку, представляющую текущее состояние светофора, и возвращает строку, представляющую состояние, в которое должен перейти светофор.
// Задача 10
function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red;";
  } else {
    return "green";
  }
}

console.log(updateLight("yellow"));
