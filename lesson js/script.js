console.log("Today lesson 8");

// alert("today lesson 8!");

// confirm("today lesson 8?");

// prompt("Какой сегодня урок?");

// console.log(prompt("Какой сегодня урок?"));

// console.log(variable);
// console.log(variable2);
// console.log(variable3);

// var variable = "Сегодня урок про var";
// let variable2 = "Сегодня урок про let";
// const variable3 = "Сегодня урок про const";

// console.log(variable);
// console.log(variable2);
// console.log(variable3);

// const num1 = 5
// const num2 = 10

// const sum = num1 + num2

// console.log(sum)

// const userMessage = prompt('Your sms')

// console.log(userMessage)

const str = "Stroka";
const num = 2.2;
const bool = true;
const arr = [1, 2, 3, 4, 5];
console.log(arr);
const arr2 = ["test2", "test2"];
const obj = {
  test: "teststroka",
};
const empty = null;
const empty2 = undefined;

// console.log(typeof str);
console.log(Array.isArray(arr));

const user = {
  firstname: "Alex",
  lastname: "Smith",
  age: 24,
  address: {
    country: "Kazakhstan",
    city: "Almaty",
  },
};
// console.log(user);
// console.log(user.firstname);
console.log(user.address.city);

const user2 = {
  firstname: "Alex2",
  lastname: "Smith2",
  age: 26,
};

const users = [user, user2];

// console.log(users);
// console.log(user[0]);

// const user3 = undefined;

// console.log(user3?.firstname);

// console.log("uyhik".length == "sfsdfsdf".length);
// console.log(2 === "2");

// console.log(!true);
// console.log(!!true);
// console.log(!"dasd");
// console.log(!!"user");

// console.log(Boolean("dsas"));

// const myStr = "5.5";

// console.log(myStr);
// console.log(Number(myStr));
// console.log(+myStr);
// console.log(parseFloat(myStr));
// console.log(parseInt(myStr));

// console.log(String(2));
// console.log("" + 2);
// console.log(`${2}`);

// const myStr2 = 'dwq'
// console.log(isNaN(+myStr2))

// const condition = true;

// if (condition) {
//   console.log("work if");
// } else {
//   console.log("work else");
// }

// const condition = {
//   firstname: "Alex",
// };

// if (condition.firstname) {
//   console.log("work if");
// } else {
//   console.log("work else");
// }

const condition = {
  firstname: "Alex",
};

if (condition.firstname.length > 5) {
  console.log("work if");
} else if (condition.firstname.length > 2) {
  console.log("work else if");
} else {
  console.log("work else");
}
