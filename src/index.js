// It's engine
// performs all interaction with the user
// input 1 - the initial explanation of game to the user
// input 2 - a list of tuples (each tuple is a question and an answer, both text)
// inputs are packed into dictionary

import * as rs from 'readline-sync';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  // Wait for user's response.
  const userName = rs.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(game.instructions);
  for (let i = 0; i < game.questions_and_answers.length; i += 1) {
    const pair = game.questions_and_answers[i];
    const question = pair[0];
    const answer = pair[1];
    console.log(`Question: ${question}`);
    let userAnswer = rs.question('Your answer: ');
    if (Number(userAnswer)) {
      userAnswer = +(userAnswer);
    }
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
