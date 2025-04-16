// const fruits = ['apple', 'banana', 'cherry'];
// const new_fruits = [...fruits, 'strawberry'];

// console.log(new_fruits); // ['apple', 'banana', 'cherry', 'strawberry']

// const array_1 = [1, 2, 3];
// const array_2 = array_1;

// console.log(array_2);

// console.log(...array_1, ...array_2);

// function add(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(add(...numbers));

// const minsu = { name: "minsu", age: 26 }
// const copy = { ...minsu };

// console.log(copy);

const a = { name: "minsu" };
const b = { age: 26 };
const merged = { ...a, ...b };

console.log(merged); // { name: "minsu", age: 26 }
