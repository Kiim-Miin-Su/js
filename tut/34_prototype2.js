function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

const Rucy = new Dog("Rucy", 2, "brown");
const Rex = new Dog("Rex", 3, "black");

Dog.prototype.bark = function () {
    console.log("Woof! Woof!");
}

Rucy.family = "poodle";
Rex.family = "bulldog";

Dog.prototype.owner = "John";

console.log(Rucy.owner);
console.log(Rex.owner);
