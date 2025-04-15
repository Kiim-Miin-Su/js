function deep_copy(object) {
    if (object === null || typeof object !== "object") {
        return object;
    }

    if (Array.isArray(object)) {
        const result = [];
        for (var i = 0; i < object.length; i++) {
            result[i] = deep_copy(object[i]);
        }
        return result;
    }

    const result = {};
    for (var key in object) {
        result[key] = deep_copy(object[key]);
    }
    return result;

}// end of deep_copy()

const original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        zip: 10001
    }
} // end of original{}

const copy = deep_copy(original);
copy.name = "Jane";
copy.hobbies[0] = "writing";
copy.address.city = "Los Angeles";

console.log(original.name); // John
console.log(original.hobbies[0]); // reading
console.log(original.address.city); // New York

console.log(copy.name); // Jane
console.log(copy.hobbies[0]); // writing
console.log(copy.address.city); // Los Angeles






