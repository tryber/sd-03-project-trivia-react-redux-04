import React from 'react';
import './CSS_Components/Header.css';

const Header = () => {
  const { name, gravatarEmail } = JSON.parse(localStorage.getItem('state')).player;
  return (
    <div className="card-body header-component border-secondary">
      <img
        className="rounded-circle"
        alt="player"
        data-testid="header-profile-picture"
        src={gravatarEmail}
      />
      <div data-testid="header-player-name">{name}</div>
      <div data-testid="header-score">Placar: 0</div>
    </div>
  );
};

export default Header;
