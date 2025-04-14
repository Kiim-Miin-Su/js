class Pet {
    constructor() {
        this._age = 0;
        this._name = "Unknown";
        this._type = "Unknown";
        this._energy = 100;
        this._hunger = 100;
        this._happiness = 100;
    }
    get_info() {
        console.log(Object.keys(this));
        console.log(Object.values(this));
        console.log("=======================================");
    }
    speak() {
        console.log("Hello, I am a pet");
    }

    set energy(values) {
        this._energy = values;
    }
    set hunger(values) {
        this._hunger = values;
    }
    set happiness(values) {
        this._happiness = values;
    }
    set name(values) {
        this._name = values;
    }
    set age(values) {
        this._age = values;
    }
    set type(values) {
        this._type = values;
    }
    get energy() {
        return this._energy;
    }
    get hunger() {
        return this._hunger;
    }
    get happiness() {
        return this._happiness;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get type() {
        return this._type;
    }
}

const first_name = ["Fluffy", "Buddy", "Max", "Bella", "Luna"];
const last_name = ["Smith", "Johnson", "Williams", "Jones", "Brown"];
const dog_types = ["포메", "푸들", "요크셔", "치와와", "마티즈"];
const cat_types = ["흰색", "컴은색", "회색", "갈색", "무지개색"];
const hamster_types = ["흰색", "컴은색", "회색", "갈색", "무지개색"];


class Dog extends Pet {
    // override
    speak() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Pet {
    // override
    speak() {
        console.log("Meow! Meow!");
    }
}
class Hamster extends Pet {
    // override
    speak() {
        console.log("Squeak! Squeak!");
    }
}

const sleeping = function (obj) {
    console.log("Sleeping...");
    obj._energy += 20;
    if (obj._energy > 100) {
        obj._energy = 100;
    }

    obj._happiness -= 10;
    if (obj._happiness < 0) {
        obj._happiness = 0;
    }

    obj._hunger -= 10;
    if (obj._hunger < 0) {
        obj._hunger = 0;
    }
}
const eating = function (obj) {
    console.log("Eating...");
    obj._hunger += 20;
    if (obj._hunger > 100) {
        obj._hunger = 100;
    }
    obj._energy -= 10;
    if (obj._energy < 0) {
        obj._energy = 0;
    }
    obj._happiness += 10;
    if (obj._happiness > 100) {
        obj._happiness = 100;
    }
}
const playing = function (obj) {
    console.log("Playing...");
    obj._happiness += 20;
    if (obj._happiness > 100) {
        obj._happiness = 100;
    }
    obj._energy -= 10;
    if (obj._energy < 0) {
        obj._energy = 0;
    }
    obj._hunger -= 10;
    if (obj._hunger < 0) {
        obj._hunger = 0;
    }
}

const create_dog = function () {
    const my_dog = new Dog();
    my_dog.speak();

    var random_number = Math.floor(Math.random() * first_name.length);

    my_dog.name = first_name[random_number] + " " + last_name[random_number];
    my_dog.age = Math.floor(Math.random() * 10) + 1;
    my_dog.type = dog_types[random_number];

    return my_dog;
}

const create_cat = function () {
    const my_cat = new Cat();
    my_cat.speak();

    var random_number = Math.floor(Math.random() * first_name.length);

    my_cat.name = first_name[random_number] + " " + last_name[random_number];
    my_cat.age = Math.floor(Math.random() * 10) + 1;
    my_cat.type = cat_types[random_number];

    return my_cat;
}
const create_hamster = function () {
    const my_hamster = new Hamster();
    my_hamster.speak();

    var random_number = Math.floor(Math.random() * first_name.length);

    my_hamster.name = first_name[random_number] + " " + last_name[random_number];
    my_hamster.age = Math.floor(Math.random() * 10) + 1;
    my_hamster.type = hamster_types[random_number];

    return my_hamster;
}

function start() {

    console.log("Welcome to the pet simulator!");

    const my_dog = create_dog();
    my_dog.get_info();

    const my_cat = create_cat();
    my_cat.get_info();

    const my_hamster = create_hamster();
    my_hamster.get_info();

    return { my_dog, my_cat, my_hamster };

}

const behavior_pet = [sleeping, eating, playing];

const { my_dog, my_cat, my_hamster } = start();

function simulate(pets, days) {
    for (var i = 0; i < days; i++) {
        console.log(`Day ${i + 1}`);

        for (var j = 0; j < pets.length; j++) {
            var random_each_number = Math.floor(Math.random() * behavior_pet.length);
            console.log(pets[j].name + " is " + behavior_pet[random_each_number].name);
            behavior_pet[random_each_number](pets[j]);
            pets[j].get_info();
        }
    }
}

simulate([my_dog, my_cat, my_hamster], 5);