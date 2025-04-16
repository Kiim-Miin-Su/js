const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const t = Number(input[0]);

var numbers = []

numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 4;

for (var i = 0; i < t; i++) {
    const n = Number(input[i + 1]);  // 각 테스트 케이스에 대한 n
    const next_number = (numbers, n) => {
        numbers.push(0);
        numbers[numbers.length - 1] = numbers[numbers.length - 2] + numbers[numbers.length - 3] + numbers[numbers.length - 4]
        if (numbers.length === n) {
            return numbers.pop();
        } else {
            next_number(numbers, n);
        }
    }
    console.log(next_number(numbers, n));
}