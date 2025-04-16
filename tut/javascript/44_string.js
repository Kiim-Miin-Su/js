const str_1 = "Hello JavaScript";
const str_2 = new String("Hello JavaScript");

console.log(str_1 == str_2); // true
console.log(str_1 === str_2); // false

console.log(str_1.length); // 16
console.log(str_2.length); // 16

// indexOf();
console.log(str_1.indexOf("J"));
console.log(str_1.indexOf("Java"));

// charAt();
console.log(str_1.charAt(0)); // H

// includes();
console.log(str_1.includes("Java")); // true

// substring();
console.log(str_1.substring(6));
console.log(str_1.substring(6, 10));

// replace();
console.log(str_1.replace("JavaScript", "JS"));

// spilit();
const str_3 = "김민수,김동원,김혜진,김채연"
const arr_name = str_3.split(',');
console.log(arr_name);

for (var i in arr_name) {
    console.log(i, arr_name[i]);
}
const str_4 = "    java    ";
console.log(`hello ${str_4.trim()}`); // java

// toUpperCase();
// toLowerCase();

console.log(str_1.toUpperCase());
console.log(str_1.toLowerCase());