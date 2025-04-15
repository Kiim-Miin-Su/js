// console.log("water boiling");

// setTimeout(function () {
//     console.log("put noodles in");
// }, 1000);

// console.log("put egg in");

// function greet(name, callback) {
//     console.log(`hello ${name}`);
//     callback(name);
// }

// function say_goodbye(name) {
//     console.log(`goodbye ${name}`);
// }

// greet("minsu", say_goodbye);

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((element) => element * 2);

// console.log(doubled);

// function do_something(callback) {
//     console.log("doing something");
//     callback();
// }

// do_something(() => {
//     console.log("done");
// })

// const calculate_add = (x, y) => {
//     return x + y
// };
// const calculate_multiply = (x, y) => x * y;

// function calculate(x, y, operate) {
//     if (x < 0 || y < 0) {
//         console.log("negative number");
//         return;
//     } else {
//         const result = operate(x, y);
//         return result;
//     }
// }

// console.log(calculate(1, 2, calculate_add));

/*
회문 체크 재귀 함수;
is_palindrome(str);
*/

const is_palindrome = (str) => {
    if (str.length === 1) {
        return true;
    } else if (str.length === 0) {
        return undefined;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return is_palindrome(str.slice(1, str.length - 1));
    }
}

console.log(is_palindrome("racecar"));
console.log(is_palindrome("hello"));
console.log(is_palindrome("level"));
console.log(is_palindrome('a'));