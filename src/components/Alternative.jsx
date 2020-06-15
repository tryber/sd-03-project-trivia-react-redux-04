import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onAnswerdQuestion } from '../actions/game';

import { setScore } from '../services/localStorageAPI';

const borderColor = (type) => {
  if (type === 'correct-answer') return 'rgb(6, 240, 15)';
  return 'rgb(255, 0, 0)';
};

const toPoints = (difficult) => {
  switch (difficult) {
    case 'hard': return 3;
    case 'medium': return 2;
    case 'easy': return 1;
    default: return 0;
  }
};

const evaluateAnswer = (type, time, difficult) => {
  if (type === 'correct-answer') setScore(10 + (toPoints(difficult) * time));
};

const Alternative = ({ text, type, index, onAnswerd, reveal, time, difficult }) => (
  <button
    className="btn btn-outline-success"
    disabled={reveal}
    style={reveal ? { border: `3px solid ${borderColor(type)}` } : {}}
    data-testid={`${type}${index !== null ? `-${index}` : ''}`}
    onClick={() => { onAnswerd(); evaluateAnswer(type, time, difficult); }}
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
  time: PropTypes.number.isRequired,
  difficult: PropTypes.oneOf(['hard', 'medium', 'easy']).isRequired,
};

Alternative.defaultProps = {
  index: null,
};

const mapStateToProps = ({ game: { reveal, time } }) => ({
  reveal,
  time,
});

const mapDispatchToProps = (dispatch) => ({
  onAnswerd: () => dispatch(onAnswerdQuestion()), // time is stopped together
});

export default connect(mapStateToProps, mapDispatchToProps)(Alternative);
