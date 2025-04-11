// primitive_type

let num = 0;
let str = "hello";
let bool = true;
let null_value = null;
let undefined_value = undefined;
let big_number = 1234567890123456789012345678901234567890n;
let unique = Symbol("unique");
let obj = {
    name: "kim",
    age: 26,
};

console.log("primitive_type");
console.log(num);
console.log(str);
console.log(bool);
console.log(null_value);
console.log(undefined_value);
console.log(big_number);
console.log(unique);

let minsu = {
    name: "김민수",
    age: 26,
    isMarried: false,
}
let arr = [1, 2, 3, 4, 5];
let greet = function () {
    return "Hello!";
}

let now = new Date();

console.log(minsu);
console.log(arr);
console.log(greet());
console.log(now);

let num1 = 1;
let num2 = 2;

console.log(`${num1} * ${num2} = ${num1 * num2}`);