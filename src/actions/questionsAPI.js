import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILED,
  RESTART,
} from '../Types';
import fetchQuestionsAPI from '../services/index';

export const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
  loading: true,
});

export const receiveQuestionsSuccess = (data) => {
  console.log(data)
  return ({
    type: RECEIVE_QUESTIONS_SUCCESS,
    loading: false,
    data,
  });
}

export const receiveQuestionsFailed = (errorMessage) => {
  console.log(errorMessage)
  return ({
    type: RECEIVE_QUESTIONS_FAILED,
    loading: false,
    errorMessage,
  });
}

export const fetchQuestions = (args) => (
  (dispatch) => {
    dispatch(requestQuestions());

    return fetchQuestionsAPI(args)
      .then(
        (data) => dispatch(receiveQuestionsSuccess(data)),
        (message) => dispatch(receiveQuestionsFailed(message)),
      );
  }
);

export const prepareToRestart = () => ({ type: RESTART, questions: [], loading: true, errorMessage: '' });

export default fetchQuestions;
