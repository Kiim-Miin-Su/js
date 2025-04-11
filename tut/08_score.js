let kor = 100;
let en = 76;
let math = 95;
let total = kor + en + math;
let avg = total / 3;

if (avg >= 90) {
    console.log(`total: ${total}`)
    console.log(`avg: ${avg}`)
    console.log("A");
}
else if (avg >= 80) {
    console.log(`total: ${total}`)
    console.log(`avg: ${avg}`)
    console.log("B");
}
else if (avg >= 70) {
    console.log(`total: ${total}`)
    console.log(`avg: ${avg}`)
    console.log("C");
}
else if (avg >= 60) {
    console.log(`total: ${total}`)
    console.log(`avg: ${avg}`)
    console.log("D");
}
else {
    console.log(`total: ${total}`)
    console.log(`avg: ${avg}`)
    console.log("F");
}