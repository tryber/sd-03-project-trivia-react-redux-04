import {
  NEXT_QUESTION,
  ANSWERD_QUESTION,
  STOP_TIME,
  SET_TIME_VALUE,
} from '../Types';

const INITIAL_STATE = {
  questionID: 0,
  reveal: false,
  time: 30,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_QUESTION: return { ...state, questionID: action.id, reveal: false };
    case STOP_TIME:
    case ANSWERD_QUESTION:
      return { ...state, reveal: true, time: 0 };
    case SET_TIME_VALUE: return { ...state, time: action.time };
    default: return state;
  }
};

export default gameReducer;
