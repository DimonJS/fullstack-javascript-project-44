// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {
    const NUMBER_OF_QUESTIONS = 3;
    const MAX_VALUE = 10;
    const PROGRESSION_LENGTH = 10;
  
    const gameLogic = {};
    gameLogic.instructions = 'What number is missing in the progression?';
    const qAndA = [];

    for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
      const start = Math.floor(Math.random() * MAX_VALUE);
      const increment = Math.floor(Math.random() * MAX_VALUE);
      const position = Math.floor(Math.random() * PROGRESSION_LENGTH);
      const progression = [];
      for (let j = 0; j < PROGRESSION_LENGTH; j += 1) {
        progression.push(start + j * increment);
      }
      progression[position] = '..';
      const question = progression.join(' ');
      const answer = +`${start + position * increment}`;
      qAndA.push([question, answer]);
    }
    gameLogic.questions_and_answers = qAndA;
    return gameLogic;
  };
  