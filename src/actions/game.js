import {
  NEXT_QUESTION,
} from '../Types';

export const goToNextQuestion = (id) => ({ type: NEXT_QUESTION, id });
