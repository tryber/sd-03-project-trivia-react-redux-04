import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import gameReducer from './gameReducer';

export default combineReducers({ APIQuestions: questionsReducer, game: gameReducer });
