import React from 'react';
import { Link } from 'react-router-dom';
import './CSS_Components/Raking.css';

const Ranking = () => (
  <div className="raking">
    <h1 data-testid="ranking-title">This is the <strong>Ranking</strong> page</h1>
    <Link to={'/'}>
      <button className="btn btn-light" data-testid="btn-go-home">Voltar ao Início</button>
    </Link>
  </div>
);

export default Ranking;
