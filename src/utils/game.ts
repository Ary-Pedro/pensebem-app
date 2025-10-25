import { ColorKey, Program } from '../data/programs';

export const TOTAL_ATTEMPTS = 3 as const;

export const pointsForAttempt = (attempt: number): number => {
  if (attempt === 1) return 3;
  if (attempt === 2) return 2;
  if (attempt === 3) return 1;
  return 0;
};

type OptionMap = Record<ColorKey, string>;

const COLOR_ORDER: ColorKey[] = ['red', 'yellow', 'blue', 'green'];

export const buildOptions = (
  program: Program,
  questionIndex: number,
): OptionMap => {
  const question = program.questions[questionIndex];
  const optionMap: OptionMap = {
    red: '',
    yellow: '',
    blue: '',
    green: '',
  };

  optionMap[question.correctColor] = question.answer;

  const fillerAnswers = program.questions
    .filter((_, idx) => idx !== questionIndex)
    .map(q => q.answer);

  let pointer = (questionIndex * 2) % fillerAnswers.length;

  COLOR_ORDER.forEach(color => {
    if (color === question.correctColor) {
      return;
    }

    let attempts = 0;

    while (
      (fillerAnswers[pointer] === question.answer ||
        Object.values(optionMap).includes(fillerAnswers[pointer])) &&
      attempts < fillerAnswers.length
    ) {
      pointer = (pointer + 1) % fillerAnswers.length;
      attempts += 1;
    }

    optionMap[color] = fillerAnswers[pointer];
    pointer = (pointer + questionIndex + 3) % fillerAnswers.length;
  });

  return optionMap;
};
