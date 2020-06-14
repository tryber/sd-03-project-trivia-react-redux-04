import React from 'react';
import PropTypes from 'prop-types';

const GravatarImage = ({ url, name, score, index }) => (
  <li key={name}>
    <img alt="player gravatar" data-testid="header-profile-picture" src={url} />
    <div data-testid={`player-name-${index}`}>{name}</div>
    <div data-testid={`player-score-${index}`}>{score}</div>
  </li>
);

GravatarImage.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default GravatarImage;
