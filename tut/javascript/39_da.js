// const object = { name: "minsu", age: 26 };
// const { name, age } = object;

// console.log(name);
// console.log(age);

/*
function display({ name, age, address, job }) {
    console.log(name, age, address, job);
}

const person = {
    name: "John",
    age: 30,
    address: {
        city: "suwon",
        zip: 12345
    },
}

console.log(person);

const new_person = { ...person, job: "developer" };

console.log(new_person);

display(new_person);

const { pet = "rucy" } = new_person;

console.log(new_person); */

const component = {
    name: "button",
    styles: {
        color: "red",
        size: "large",
    },
}

function change_color({ styles: { color } }) {
    console.log(color);
}

change_color(component);