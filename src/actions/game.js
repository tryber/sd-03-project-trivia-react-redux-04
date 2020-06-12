import {
  NEXT_QUESTION,
  ANSWERD_QUESTION,
  STOP_TIME,
  SET_TIME_VALUE,
  SEND_TIME_ID,
} from '../Types';

export const onAnswerdQuestion = (type) => ({ type: ANSWERD_QUESTION, questionType: type });

export const stopTime = () => ({ type: STOP_TIME });

export const goToNextQuestion = (id) => ({ type: NEXT_QUESTION, id: id + 1 });

export const setTimerValue = (time) => ({ type: SET_TIME_VALUE, time });

export const timeID = (id) => ({ type: SEND_TIME_ID, id });
