// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {
    const NUMBER_OF_QUESTIONS = 3;
    const MAX_VALUE = 10;

    const gameLogic = {};
    gameLogic.instructions = 'What is the result of the expression?';
    const qAndA = [];
    
    const sign = ['+', '-', '*'];
    
    for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
        const num1 = Math.floor(Math.random() * MAX_VALUE);
        const num2 = Math.floor(Math.random() * MAX_VALUE);
        const randomItem = sign[Math.floor(Math.random() * sign.length)];

        const question = `${num1} ${randomItem} ${num2}`;
        const answer = eval(num1 + randomItem + num2);
        qAndA.push([question, answer]);        
    }
    gameLogic.questions_and_answers = qAndA;
    return gameLogic;
}
