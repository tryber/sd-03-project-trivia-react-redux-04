import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILED,
  REQUEST_TOKEN,
  RECEIVE_TOKEN_SUCCESS,
  RECEIVE_TOKEN_FAILED,
} from "../Types";

const INITIAL_STATE = {
  token: '',
  questions: [],
  loading: false,
};

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_QUESTIONS:
      return { ...state, loading: action.loading };
    case RECEIVE_QUESTIONS_SUCCESS:
      console.log(action.data)
      return { ...state, loading: action.loading, questions: action.data.results };
    case RECEIVE_QUESTIONS_FAILED:
      return { ...state, loading: action.loading, errorMessage: action.errorMessage };
    case REQUEST_TOKEN:
      return { ...state, loading: action.loading };
    case RECEIVE_TOKEN_SUCCESS:
      console.log(action.token);
      return { ...state, loading: action.loading, token: action.token };
    case RECEIVE_TOKEN_FAILED:
      return { ...state, loading: action.loading, errorMessage: action.errorMessage };
    default: return state;
  }
};

export default questionsReducer;
