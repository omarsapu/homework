// Задача 1
let number = prompt("Ведите число:");
if (number % 2 == 0) {
  alert(`Число ${number} четное`);
} else {
  alert(`Число ${number} не четное`);
}

// Задача 2
const age = 83;
let discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
console.log(`Скидка ${discount}%`);

switch (true) {
  case age < 18:
    console.log(`Скидка 10%`);
    break;
  case age <= 65:
    console.log(`Скидка 20%`);
    break;
  default:
    console.log("Скидка 30%");
    break;
}

// Задача 3
const role = prompt("Введите ваше имя:");
const password = prompt("Введите пароль:")

if ((role === "admin" || role === "user") &&  password === "123456"){
  alert('Доступ разрешен!')
}else{
  alert("Доступ запрещен!!!")
}

// Задача 4*
const weight = +prompt("Введите вес посылки в (кг):");
const rate = prompt("Введите тип доставки:");

switch ((type = rate)) {
  case "Стандарт":
  case "Экспресс":
  case "Премиум":
}

// if (weight <= 0){
//   alert("Некорректный вес посылки!")
// }else if(rate != type){
//   alert("Неверный тип доставки!")
// } 
// Оставлю тут надеюсь я хоть в правильном направлении решал эту задачу:)