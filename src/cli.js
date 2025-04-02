import readlineSync from 'readline-sync';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    // Wait for user's response.
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}

export default greeting;
