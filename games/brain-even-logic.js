import readlineSync from 'readline-sync';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    // Wait for user's response.
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    for (let i = 0; i < 3; i += 1) {
        const num = Math.floor(Math.random() * 10);
        var trueAnswer = num % 2 === 0 ? 'yes' : 'no';
        console.log(`Question: ${num}`);
        var answer = readlineSync.question('Your answer: ');
        if ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 === 1)) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
            console.log(`Let's try again, ${userName}`);
            break;
        }
    }
    console.log(`Congratulations, ${userName}`);
}

export default greeting;