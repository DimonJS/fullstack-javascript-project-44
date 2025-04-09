// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {
    const NUMBER_OF_QUESTIONS = 3;
    const MAX_VALUE = 10;

    const gameLogic = {};
    gameLogic.instructions = 'Answer "yes" if the number is even, otherwise answer "no".';
    const qAndA = [];
    
    for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
        const num = Math.floor(Math.random() * MAX_VALUE);
        const question = `${num}`;
        let answer = '';
        if (num % 2 === 0) {
            answer = 'yes';
        } else {
            answer = 'no';
        }
        qAndA.push([question, answer]);
    }
    gameLogic.questions_and_answers = qAndA;
    return gameLogic;
};
