import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onAnswerdQuestion } from '../actions/game';

const borderColor = (type) => {
  if (type === 'correct-answer') return 'rgb(6, 240, 15)';
  return 'rgb(255, 0, 0)';
};

const Alternative = ({ text, type, index, onAnswerd, reveal }) => (
  <button
    disabled={reveal}
    style={reveal ? { border: `3px solid ${borderColor(type)}` } : {}}
    data-testid={`${type}${index !== null ? `-${index}` : ''}`}
    onClick={onAnswerd}
  >
    {text}
  </button>
);

Alternative.propTypes = {
  onAnswerd: PropTypes.func.isRequired,
  reveal: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number,
};

Alternative.defaultProps = {
  index: null,
};

const mapStateToProps = ({ game: { reveal } }) => ({
  reveal,
});

const mapDispatchToProps = (dispatch) => ({
  onAnswerd: () => dispatch(onAnswerdQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alternative);
