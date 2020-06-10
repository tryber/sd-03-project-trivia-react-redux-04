import React from 'react';
import { Link } from 'react-router-dom';

const Feedback = () => (
  <div>
    <h1>This is the <strong>Feedback</strong> page</h1>
    <Link to={'/ranking'}>
      <button data-testid="btn-ranking">Ver Ranking</button>
    </Link>
  </div>
);

export default Feedback;
