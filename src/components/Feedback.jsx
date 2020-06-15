import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './CSS_Components/Feedback.css';

const Feedback = () => (
  <div className="content">
    <div>
      <Header shouldShowScore />
    </div>
    <div className="feedback-component">
      <h1>This is the <strong>Feedback</strong> page</h1>
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
