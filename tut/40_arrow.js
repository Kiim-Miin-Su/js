// function add(x, y) {
//     return x + y;
// }

// const add_arrow1 = (x, y) => x + y;

// const add_arrow2 = (x, y) => {
//     return x + y;
// }

// console.log(add_arrow2(1, 2));

// const object = {
//     name: "minsu",
//     say_hello: function () {
//         setTimeout(function () {
//             console.log(`hello, my name is ${this.name}`);
//         }, 1000);
//     }
// }

// const object = {
//     name: "minsu",
//     say_hello: function () {
//         setTimeout(() => {
//             console.log(`hello, my name is ${this.name}`);
//         }, 1000);
//     }
// }

// object.say_hello(); // hello, my name is minsu

// console.log("hello")
// 파라미터 값이 Hello

const hello = () => console.log("hello")

setTimeout(hello
    , 1000);
// Hello를 찍어주는 익명 함수가 파라미터고, 이 익명함수(파라민터)를 set_time_out이 콜백해줌

