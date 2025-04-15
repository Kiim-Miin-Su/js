// function sum(...numbers) {
//     var total = 0;
//     for (let n of numbers) {
//         total += n;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3)); // 6

// console.log(sum(10, 20, 30, 40))


const user = {
    name: "minsu",
    age: 26,
    city: "seoul",
}

const minsu_info = { name, ...rest } = user;
console.log(name); // minsu
console.log(rest); // { age: 26, city: 'seoul' }

console.log(minsu_info);