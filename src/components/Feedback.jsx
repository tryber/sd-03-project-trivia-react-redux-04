import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './CSS_Components/Feedback.css';
import { INITIAL_STORAGE_STATE } from '../services/localStorageAPI';

const feedbackText = (assertions) => {
  if (assertions < 3) return 'Podia ser melhor...';
  if (assertions >= 3) return 'Mandou bem!';
  return null;
};

const Feedback = () => {
  const state = JSON.parse(localStorage.getItem('state')) || INITIAL_STORAGE_STATE;
  const { score, assertions } = state.player;
  return (
    <div className="content">
      <div>
        <Header shouldShowScore />
      </div>
      <div className="feedback-component">
        <h1><strong>Feedback</strong></h1>
        <div>
          <h3 data-testid="feedback-text">{feedbackText(assertions)}</h3>
          <h4>Pontuação <span data-testid="feedback-total-score">{score}</span></h4>
          <h4>Acertos <span data-testid="feedback-total-question">{assertions}</span></h4>
        </div>
        <Link to="/">
          <button
            className="btn btn-outline-dark"
            data-testid="btn-play-again"
          >
            Jogar Novamente
        </button>
        </Link>
        <Link to={'/ranking'}>
          <button className="btn btn-outline-danger" data-testid="btn-ranking">Ver Ranking</button>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
