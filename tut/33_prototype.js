function person(name) {
    this.name = name;
}

const p1 = new person('John');
const p2 = new person('hane');

console.log(p1.name); // John
console.log(p2.name); // hane

person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
}
p1.sayHello(); // Hello, my name is John
p2.sayHello(); // Hello, my name is hane