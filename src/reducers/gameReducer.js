import {
  NEXT_QUESTION,
  ANSWERD_QUESTION,
  STOP_TIME,
  SET_TIME_VALUE,
  SEND_TIME_ID,
  RESTART,
} from '../Types';

const INITIAL_STATE = {
  questionID: 0,
  reveal: false,
  time: 30,
  id: 0,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTART: return INITIAL_STATE;
    case NEXT_QUESTION:
      return {
        ...state,
        questionID: action.id,
        reveal: false,
        time: 30,
      };
    case ANSWERD_QUESTION:
    case STOP_TIME: clearInterval(state.id);
      return { ...state, reveal: true };
    case SET_TIME_VALUE: return { ...state, time: action.time };
    case SEND_TIME_ID: return { ...state, id: action.id };
    default: return state;
  }
};

export default gameReducer;
