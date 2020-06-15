import React from 'react';
import { Link } from 'react-router-dom';
import './CSS_Components/Raking.css';

import RankPlayer from './RankPlayer';

const Ranking = () => {
  const sortedRank = JSON.parse(localStorage.getItem('ranking'))
    .sort(({ score: A }, { score: B }) => Number(B) - Number(A));
  return (
    <div className="ranking">
      <h1 data-testid="ranking-title">This is the Ranking page</h1>
      <table>
        <tbody>
          {sortedRank.map(({ name, picture, score }, index) => (
            <RankPlayer key={name} url={picture} name={name} score={score} index={index} />
          ))}
        </tbody>
      </table>
      <Link to={'/'}>
        <button className="btn btn-light" data-testid="btn-go-home">Voltar ao Início</button>
      </Link>
    </div>
  );
};

export default Ranking;
