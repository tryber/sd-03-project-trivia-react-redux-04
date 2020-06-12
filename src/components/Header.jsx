import React from 'react';

const Header = () => {
  const { name, gravatarEmail } = JSON.parse(localStorage.getItem('state')).player;
  return (
    <div>
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
