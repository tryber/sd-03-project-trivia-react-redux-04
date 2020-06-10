import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILED,
} from '../Types';

const INITIAL_STATE = {
  questions: [],
  loading: true,
  errorMessage: '',
};

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { ...state, loading: action.loading };
    case RECEIVE_QUESTIONS_SUCCESS:
      return { ...state, loading: action.loading, questions: action.data.results };
    case RECEIVE_QUESTIONS_FAILED:
      return { ...state, loading: action.loading, errorMessage: action.errorMessage };
    default: return state;
  }
};

export default questionsReducer;
