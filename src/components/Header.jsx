import React from 'react';

const Header = () => {
  const { playerName, gravatarEmail } = JSON.parse(localStorage.getItem('state')).player;
  return (
    <div>
      <img
        alt="player"
        data-testid="header-profile-picture"
        src={gravatarEmail}
      />
      <div data-testid="header-player-name">{playerName}</div>
      <div data-testid="header-score">Placar: 0</div>
    </div>
  );
};

export default Header;
