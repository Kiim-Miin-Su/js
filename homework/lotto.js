const lotto = new Set();

while (lotto.size < 6) {
    var random_number = Math.floor(Math.random() * 45) + 1;
    lotto.add(random_number);
}

console.log(lotto);