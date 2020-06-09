import React from 'react';
import { Link } from 'react-router-dom';

const Ranking = () => (
  <div>
    <h1>This is the <strong>Ranking</strong> page</h1>
    <Link to={'/'}>
      <button data-testid="btn-go-home">Voltar ao Início</button>
    </Link>
  </div>
);

export default Ranking;
