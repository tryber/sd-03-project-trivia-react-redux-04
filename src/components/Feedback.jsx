import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './CSS_Components/Feedback.css';

// const { score, assertions } = JSON.parse(localStorage.getItem('state')).player;
// const feedbackText = () => {
//   if (assertions < 3) return 'Podia ser melhor...';
//   if (assertions >= 3) return 'Mandou bem!';
//   return null;
// };

const Feedback = () => (
  <div className="content">
    <div>
      <Header shouldShowScore />
    </div>
    <div className="feedback-component">
      <h1><strong>Feedback</strong></h1>
      {/* <div>
        <h3 data-testid="feedback-text">{feedbackText()}</h3>
        <h4 data-testid="feedback-total-score">Pontuação {score}</h4>
        <h4 data-testid="feedback-total-question">Acertos {assertions}</h4>
      </div> */}
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

export default Feedback;
