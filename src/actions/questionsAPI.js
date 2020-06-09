import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAILED,
  REQUEST_TOKEN,
  RECEIVE_TOKEN_SUCCESS,
  RECEIVE_TOKEN_FAILED,
} from "../Types";
import fetchQuestionsAPI from '../services/index';

export const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
  loading: true,
});

export const requestToken = () => ({
  type: REQUEST_TOKEN,
  loading: true,
});

export const receiveTokenSuccess = (token) => ({
  type: RECEIVE_TOKEN_SUCCESS,
  loading: false,
  token,
});

export const receiveTokenFailed = (errorMessage) => ({
  type: RECEIVE_TOKEN_FAILED,
  loading: false,
  errorMessage,
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
    dispatch(token ? requestQuestions() : requestToken());

    return fetchQuestionsAPI(token)
      .then(
        (data) => token ? dispatch(receiveQuestionsSuccess(data)) : dispatch(receiveTokenSuccess(data.token)),
        (message) => token ? dispatch(receiveQuestionsFailed(message)) : dispatch(receiveTokenFailed(message)),
      );
  }
);

export default fetchQuestions;
