// Задача 1
for (i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log(i);
  }
}

// Задача 2
const number = prompt("Ведите число:");
let factorial = 1;

for (i = 1; i <= number; i++) {
  factorial = factorial * i;
}
alert(factorial);

// Задача 3
for (i = 1; i <= 8; i++) {
  let line = "";
  for (j = 1; j <= 8; j++) {
    if ((i + j) % 2) {
      line += "Б"
    } else {
      line += "Ч"
    }
  }
  console.log(line)
}
