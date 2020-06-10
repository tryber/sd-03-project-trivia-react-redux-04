import {
  NEXT_QUESTION,
  ANSWERD_QUESTION,
  TIME_OUT,
} from '../Types';

export const onAnswerdQuestion = () => ({ type: ANSWERD_QUESTION });

export const onQuestionTimeOut = () => ({ type: TIME_OUT });

export const goToNextQuestion = (id) => ({ type: NEXT_QUESTION, id });

export default goToNextQuestion;
