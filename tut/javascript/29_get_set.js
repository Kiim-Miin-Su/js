class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge < 0) {
            console.log("Age cannot be negative.");
        } else {
            this._age = newAge;
        }
    }
}

const person = new Person("John", 30);

console.log(person._name); // John
console.log(person._age); // 30

