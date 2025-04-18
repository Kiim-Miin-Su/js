const lotto = new Set();

while (lotto.size < 6) {
    var random_number = Math.floor(Math.random() * 45) + 1;
    lotto.add(random_number);
}

const sortedLotto = Array.from(lotto).sort((a, b) => a - b);

console.log(sortedLotto);