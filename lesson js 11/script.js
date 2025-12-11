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
console.log("======================= 1 ========================");

let a = 12,
  b = 34;

[a, b] = [b, a];

console.log(a, b);

// 2. Проверка чётного или нечётного числа
// Написать функцию isEven(num), которая возвращает:

// true — если число чётное

// false — если нечётное

console.log("======================= 2 ========================");

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3));

// 3. Сумма чисел от 1 до N
// Написать функцию, которая принимает число n и возвращает сумму всех чисел от 1 до n.

// Пример:
// sumTo(5) → 15

console.log("======================= 3 ========================");

function sumTo(num) {
  let summa = 0;

  for (let index = 1; index <= num; index++) {
    summa += index;
  }

  return summa;
}

console.log(sumTo(5));

// 4. Переворот строки
// Написать функцию reverseString(str), которая переворачивает строку.

// Пример:
// "hello" → "olleh"

console.log("======================= 4 ========================");

function reverseString(str) {
  return Array.from(str).reverse().join("");
}

console.log(reverseString("hello"));

// 5. Фильтрация массива по чётным числам
// Написать функцию filterEven(arr), которая возвращает новый массив только с чётными значениями.

console.log("======================= 5 ========================");

function filterEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}

let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(filterEven(arra));

// 6. Конвертер температуры
// Создать 2 функции:

// celsiusToFahrenheit(c)

// fahrenheitToCelsius(f)

// Формулы:
// F = C * 9/5 + 32
// C = (F - 32) * 5/9

console.log("======================= 6 ========================");

console.log(celsiusToFahrenheit(12));

console.log(fahrenheitToCelsius(23));

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

// 7. Проверка строки на палиндром
// Написать функцию isPalindrome(str), которая:

// игнорирует пробелы

// игнорирует регистр

// возвращает true, если строка читается одинаково в обе стороны

// Пример:
// "Race car" → true
// "Hello" → false

console.log("======================= 7 ========================");

console.log(isPalindrome("A sa"));

function isPalindrome(str) {
  let lowerStr = str.toLowerCase().replace(/\s+/g, "");

  return (
    Array.from(lowerStr).join("") === Array.from(lowerStr).reverse().join("")
  );
}

// 8. Сумма всех элементов массива (for)
// Написать функцию sumArray(arr), которая с помощью обычного цикла for возвращает сумму всех чисел массива.

console.log("======================= 8 ========================");

let chiselder = [34, 45, 435, 54, 4, 5, 45];

console.log(sumArray(chiselder));

function sumArray(arr) {
  let summasy = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    summasy += element;
  }

  return summasy;
}

// 9. Найти самое длинное слово в массиве строк (for…of)
// Написать функцию longestWord(words), которая с помощью for…of находит самое длинное слово.

// Пример:
// ["apple", "banana", "kiwi"] → "banana"

console.log("======================= 9 ========================");

let fruits = ["apple", "banana", "kiwi"];

console.log(longestWord(fruits));
console.log(longestWord2(fruits));

function longestWord(words) {
  let maxi = "";

  for (let index = 0; index < words.length; index++) {
    const element = words[index];

    //console.log(element.length);

    if (element.length > maxi.length) maxi = element;
  }

  return maxi;
}

function longestWord2(words) {
  let maxi = "";

  for (let w of words) {
    //console.log(w.length);

    if (w.length > maxi.length) maxi = w;
  }

  return maxi;
}

// 10. Подсчитать количество свойств в объекте (for…in)
// Написать функцию countProps(obj), которая возвращает число ключей объекта.

// Пример:
// { a: 1, b: 2, c: 3 } → 3

console.log("======================= 10 ========================");

let kluchei = { a: 1, b: 2, c: 3 };

console.log(countProps1(kluchei));

function countProps1(obj) {
  let count = 0;

  for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    count++;
  }

  return count;
}

console.log(countProps(kluchei));

function countProps(obj) {
  return Object.keys(obj).length;
}

// 11. Вывести числа от 1 до N (while)
// Написать функцию printTo(n), которая выводит в консоль числа от 1 до n с помощью цикла while.

console.log("======================= 11 ========================");

printTo(5);

function printTo(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i += 1;
  }
}

// 12. Найти число в массиве вручную (без includes)
// Использовать цикл (любой: for, for…of, while).
// Функция manualFindIndex(arr, value) должна вернуть:

// index, найденного элемента

// undefined— если элемент не найден

// Пример:
// manualFindIndex([1,2,3], 2) → 1

console.log("======================= 12 ========================");

console.log(manualFindIndex([1, 2, 3], 2));

function manualFindIndex(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element === value) {
      return index;
    }
  }
  return undefined;
}
