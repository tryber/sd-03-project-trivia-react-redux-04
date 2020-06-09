import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILED,
} from "../Types";
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

export const receiveQuestionsFailed = (errorMessage) => ({
  type: RECEIVE_QUESTIONS_FAILED,
  loading: false,
  errorMessage,
});

export const fetchQuestions = (token) => (
  (dispatch) => {
    dispatch(requestQuestions());

    return fetchQuestionsAPI(token)
      .then(
        (data) => dispatch(receiveQuestionsSuccess(data)),
        (message) => dispatch(receiveQuestionsFailed(message)),
      );
  }
);

export default fetchQuestions;
