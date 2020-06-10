import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

Header.propTypes = {
  playerName: PropTypes.string.isRequired,
  score: PropTypes.string, // number as string
  gravatarEmail: PropTypes.string.isRequired,
};

Header.defaultProps = {
  score: null
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Header);
