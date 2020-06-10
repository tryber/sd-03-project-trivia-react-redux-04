import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import { default as game } from './gameReducer';

export default combineReducers({ APIQuestions: questionsReducer, game });
