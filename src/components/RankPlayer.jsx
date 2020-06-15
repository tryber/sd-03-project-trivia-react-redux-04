import React from 'react';
import PropTypes from 'prop-types';

const GravatarImage = ({ url, name, score, index }) => (
  <tr key={name}>
    <td>
      <img alt="player gravatar" data-testid="header-profile-picture" src={url} />
    </td>
    <td data-testid={`player-name-${index}`}>{name}</td>
    <td data-testid={`player-score-${index}`}>{score}</td>
  </tr>
);

GravatarImage.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default GravatarImage;
