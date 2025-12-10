// document.addEventListener('DOMContentLoaded', () => {
//   const h1 = document.querySelector('h1');

//   console.log('worked');

//   console.log(h1);
// });

// const
//   test1 = '',
//   test2 = '',
//   test3 = [];

// test3.push('dwa')

// console.log({
//   test1,
//   test2,
//   test3
// });

// const h1 = document.querySelector('h1');

// if (h1) {
//   console.log('Тег h1 найден');
// } else {
//   console.log('Тег h1 не найден');
// }

// h1 ? console.log('Тег h1 найден')
//   : console.log('Тег h1 не найден');

// const user = {
//   firstName: 'Alex',
//   lastName: 'Smith'
// }

// try {
//   console.log(user.birthDate.day);
//   const dwadaw = dwadwadwa
// } catch (error) {
//   console.log('Произошла ошибка в поле user.birthDate.day', error);
// }

// console.log('Наш скрипт отработал до конца!');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((item) => {
//   console.log(item);
// });

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
//   if (arr[index] === 3) {
//     break
//   }
// }
// for in
// for of
// while

const filteredArr = arr.filter((item) => item < 4);

const newArray = arr.map((item) => ({
  name: `Name #${item}`,
  id: item,
}));

// console.table(newArray);
// console.log(newArray);

// console.log(arr);

// Мутирует исходный массив
const nArr = [];
arr.forEach((item) => nArr.push(item));
// const popedArr = nArr.pop();
const popedArr = [...arr].pop();

// console.log(popedArr);
// console.log(arr);

// const testStr2 = {
//   name: 'dwadwadwa'
// };

// const testStr = {
//   name: 'dwadwadwa'
// };

// Object.freeze(testStr)

// testStr.age = 222
// console.log(testStr);

// console.log(testStr == testStr2);

const user = {
  firstName: "Alex",
  lastName: "Smith",
  age: 22,
  city: "Almaty",
};

// delete user.lastName

// console.log(user);

const userKeys = Object.keys(user);

const userValues = Object.values(user);

// console.log(userValues);

// console.log(userKeys);

// userKeys.forEach(key => console.log(key, user[key]))

// console.log(window.window.window.window.window.window.window);

// console.log([1] == [1]);

// console.log('' || 'Сработал твикс (или)');

// console.log('' ?? 'Сработал ?? (или)');

// const myTitle =
//   document.querySelector("h2").textContent ??
//   document.querySelector("h1").textContent;

// console.log(myTitle);

// 1. Обмен значениями двух переменных
// Создать две переменные a и b и поменять их значения местами без использования третьей переменной.

let a = 12,
  b = 34;

[a, b] = [b, a];

console.log(a, b);

console.log("===============================================");

// 2. Проверка чётного или нечётного числа
// Написать функцию isEven(num), которая возвращает:

// true — если число чётное

// false — если нечётное

function isEven(num) {
  if (num % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isEven(1);

console.log("===============================================");

// 3. Сумма чисел от 1 до N
// Написать функцию, которая принимает число n и возвращает сумму всех чисел от 1 до n.

// Пример:
// sumTo(5) → 15

function sumTo(num) {
  summa = 0;

  for (let index = 1; index <= num; index++) {
    summa += index;
  }

  console.log(summa);
}

sumTo(5);

console.log("===============================================");

// 4. Переворот строки
// Написать функцию reverseString(str), которая переворачивает строку.

// Пример:
// "hello" → "olleh"

function reverseString(str) {
  console.log(Array.from(str).reverse().join(""));
}

reverseString("hello");

console.log("===============================================");

// 5. Фильтрация массива по чётным числам
// Написать функцию filterEven(arr), которая возвращает новый массив только с чётными значениями.

let newArr = [];

function filterEven(arr) {
  arr.filter((item) => {
    if (item % 2 === 0) {
      newArr.push(item);
    }
  });

  console.log(newArr);
}

let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filterEven(arra);

console.log("===============================================");

// 6. Конвертер температуры
// Создать 2 функции:

// celsiusToFahrenheit(c)

// fahrenheitToCelsius(f)

// Формулы:
// F = C * 9/5 + 32
// C = (F - 32) * 5/9

celsiusToFahrenheit(12);

fahrenheitToCelsius(23);

function celsiusToFahrenheit(c) {
  console.log((c * 9) / 5 + 32);
}

function fahrenheitToCelsius(f) {
  console.log(((f - 32) * 5) / 9);
}

console.log("===============================================");

// 7. Проверка строки на палиндром
// Написать функцию isPalindrome(str), которая:

// игнорирует пробелы

// игнорирует регистр

// возвращает true, если строка читается одинаково в обе стороны

// Пример:
// "Race car" → true
// "Hello" → false

isPalindrome("A sa");

function isPalindrome(str) {
  let lowerStr = str.toLowerCase().replace(" ", "");

  console.log(
    Array.from(lowerStr).join("") === Array.from(lowerStr).reverse().join("")
  );
}

console.log("===============================================");

// 8. Сумма всех элементов массива (for)
// Написать функцию sumArray(arr), которая с помощью обычного цикла for возвращает сумму всех чисел массива.

let chiselder = [34, 45, 435, 54, 4, 5, 45];

sumArray(chiselder);

function sumArray(arr) {
  let summasy = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    summasy += element;
  }

  console.log(summasy);
}

console.log("===============================================");

// 9. Найти самое длинное слово в массиве строк (for…of)
// Написать функцию longestWord(words), которая с помощью for…of находит самое длинное слово.

// Пример:
// ["apple", "banana", "kiwi"] → "banana"

let fruits = ["apple", "banana", "kiwi"];

longestWord(fruits);
longestWord2(fruits);

function longestWord(words) {
  let maxi = "";

  for (let index = 0; index < words.length; index++) {
    const element = words[index];

    //console.log(element.length);

    if (element.length > maxi.length) maxi = element;
  }

  console.log(maxi);
}

function longestWord2(words) {
  let maxi = "";

  for (let w of words) {
    //console.log(w.length);

    if (w.length > maxi.length) maxi = w;
  }

  console.log(maxi);
}

console.log("===============================================");

// 10. Подсчитать количество свойств в объекте (for…in)
// Написать функцию countProps(obj), которая возвращает число ключей объекта.

// Пример:
// { a: 1, b: 2, c: 3 } → 3

let kluchei = { a: 1, b: 2, c: 3 };

countProps1(kluchei);

function countProps1(obj) {
  let count = 0;

  for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    count++;

    const element = obj[key];
    console.log(key);
  }

  console.log(count);
}

countProps(kluchei);

function countProps(obj) {
  console.log(Object.keys(obj).length);
}

console.log("===============================================");

// 11. Вывести числа от 1 до N (while)
// Написать функцию printTo(n), которая выводит в консоль числа от 1 до n с помощью цикла while.

printTo(5);

function printTo(n) {
  let i = 1;
  while (i < n) {
    console.log(i);
    i += 1;
  }
}

console.log("===============================================");

// 12. Найти число в массиве вручную (без includes)
// Использовать цикл (любой: for, for…of, while).
// Функция manualFindIndex(arr, value) должна вернуть:

// index, найденного элемента

// undefined— если элемент не найден

// Пример:
// manualFindIndex([1,2,3], 2) → 1

manualFindIndex([1, 2, 3], 2);

function manualFindIndex(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element === value) {
      console.log(index);
    }
  }
}

console.log("===============================================");
