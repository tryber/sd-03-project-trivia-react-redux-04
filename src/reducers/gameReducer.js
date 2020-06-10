import {
  NEXT_QUESTION,
  ANSWERD_QUESTION,
  TIME_OUT,
} from '../Types';

const INITIAL_STATE = {
  questionID: 0,
  reveal: false,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_QUESTION: return { ...state, questionID: action.id, reveal: false };
    case TIME_OUT:
    case ANSWERD_QUESTION:
      return { ...state, reveal: true };
    default: return state;
  }
};

export default gameReducer;
