import React from 'react';
import PropTypes from 'prop-types';

const Header = (shouldShowScore) => {
  const { name, gravatarEmail, score } = JSON.parse(localStorage.getItem('state')).player;
  return (
    <div>
      <img
        alt="player"
        data-testid="header-profile-picture"
        src={gravatarEmail}
      />
      <div data-testid="header-player-name">{name}</div>
      <div data-testid="header-score">{shouldShowScore ? score : 0}</div>
    </div>
  );
};

Header.defaultProps = { shouldShowScore: false };

Header.propTypes = { shouldShowScore: PropTypes.bool };

export default Header;
