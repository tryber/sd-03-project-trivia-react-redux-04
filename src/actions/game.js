import {
  NEXT_QUESTION,
  ANSWERED_QUESTION,
  STOP_TIME,
  SET_TIME_VALUE,
  SEND_TIME_ID,
} from '../Types';

export const onAnsweredQuestion = () => ({ type: ANSWERED_QUESTION });

export const stopTime = () => ({ type: STOP_TIME });

export const goToQuestion = (id) => ({ type: NEXT_QUESTION, id });

export const setTimerValue = (time) => ({ type: SET_TIME_VALUE, time });

export const timeID = (id) => ({ type: SEND_TIME_ID, id });
