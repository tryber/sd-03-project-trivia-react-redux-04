import React from 'react';
import PropTypes from 'prop-types';

const Alternative = ({ text, type, index }) => (
  <button
    data-testid={`${type}${index !== null ? `-${index}` : ''}`}
  >
    {text}
  </button>
);

Alternative.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number,
};

Alternative.defaultProps = {
  index: null,
};

export default Alternative;
