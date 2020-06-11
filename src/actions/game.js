import {
  NEXT_QUESTION,
  ANSWERD_QUESTION,
  STOP_TIME,
  SET_TIME_VALUE,
} from '../Types';

export const onAnswerdQuestion = (type) => ({ type: ANSWERD_QUESTION, questionType: type });

export const stopTime = () => ({ type: STOP_TIME, time: 0 });

export const goToNextQuestion = (id) => ({ type: NEXT_QUESTION, id });

export const setTimerValue = (time) => ({ type: SET_TIME_VALUE, time });
