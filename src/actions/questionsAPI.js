import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILURE,
  RESTART,
} from '../Types';
import fetchQuestionsAPI from '../services/index';

export const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
  loading: true,
});

export const receiveQuestionsSuccess = (data) => ({
  type: RECEIVE_QUESTIONS_SUCCESS,
  loading: false,
  data,
});

export const receiveQuestionsFailure = (errorMessage) => ({
  type: RECEIVE_QUESTIONS_FAILURE,
  loading: false,
  errorMessage,
});

export const fetchQuestions = (args) => (
  (dispatch) => {
    dispatch(requestQuestions());

    return fetchQuestionsAPI(args)
      .then(
        (data) => dispatch(receiveQuestionsSuccess(data)),
        (message) => dispatch(receiveQuestionsFailure(message)),
      );
  }
);

export const prepareToRestart = () => ({ type: RESTART, questions: [], loading: true, errorMessage: '' });

export default fetchQuestions;
