// const obj_1 = { name: "minsu", age: 26, }

// const obj_2 = Object.assign({}, obj_1); // shallow copy
// obj_2.name = "jiyoung";
// console.log(obj_1.name); // minsu
// console.log(obj_2.name); // jiyoung

// const obj_1 = { name: "minsu", age: 26 };
// const obj_2 = { ...obj_1 };

// obj_2.name = "jiyoung";
// console.log(obj_1.name); // minsu

const obj_1 = {
    name: "minsu",
    age: 26,
    address: {
        city: "suwon",
        street: "godeung-ro"
    }
}

const obj_2 = { ...obj_1 }
obj_2.name = "jiyoung";
obj_2.address.city = "seoul";

console.log(obj_1.name); // minsu
console.log(obj_2.name); // jiyoung

console.log(obj_1.address.city); // seoul
