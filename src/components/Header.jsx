import React from 'react';
import PropTypes from 'prop-types';

import { INITIAL_STORAGE_STATE } from '../services/localStorageAPI';
import './CSS_Components/Header.css';

const Header = ({ shouldShowScore }) => {
  const state = JSON.parse(localStorage.getItem('state')) || INITIAL_STORAGE_STATE;
  const { name, gravatarEmail, score } = state.player;
  return (
    <div className="card-body header-component border-secondary">
      <img
        className="rounded-circle"
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
