const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your choice (rock, paper, scissors): ', function (userChoice) {
    if (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        console.log('Invalid choice. Please enter rock, paper, or scissors.');
        rl.close();
        return;
    }
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log('It\'s a tie!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }

    rl.close();
});
