// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {
  const NUMBER_OF_QUESTIONS = 3;
  const MAX_VALUE = 10;

  const gameLogic = {};
  gameLogic.instructions = 'Find the greatest common divisor of given numbers.';
  const qAndA = [];

  for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
    const num1 = Math.floor(Math.random() * MAX_VALUE);
    const num2 = Math.floor(Math.random() * MAX_VALUE);

    let a = num1;
    let b = num2;

    while (a != 0 & b != 0) {
      if (a > b) { // if a is greater than b, then a is assigned a%b
        a %= b;
      } else {
        b %= a; // do the opposite
      }
    }

    const question = `${num1} ${num2}`;
    const answer = b + a;
    qAndA.push([question, answer]);
  }
  gameLogic.questions_and_answers = qAndA;
  return gameLogic;
};
