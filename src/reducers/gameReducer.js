import {
  NEXT_QUESTION,
} from '../Types';

const INITIAL_STATE = {
  questionID: 0,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_QUESTION: return { ...state, questionID: action.id };
    default: return state;
  }
};

export default gameReducer;
