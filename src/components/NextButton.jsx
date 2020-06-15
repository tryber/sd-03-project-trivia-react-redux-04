import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { goToNextQuestion } from '../actions/game';

class NextButton extends React.Component {
  render() {
    const { goToNext, reveal, time, id } = this.props;
    if (!reveal) return null;
    return (
      <button
        className="btn btn-outline-dark"
        data-testid="btn-next"
        type="button"
        onClick={goToNext(id, time)}
      >
        Próxima
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.game.questionID,
  reveal: state.game.reveal,
  time: state.game.time,
});

const mapDispatchToProps = (dispatch) => ({
  goToNext: (id, time) => (() => dispatch(goToNextQuestion(id, time))),
});

NextButton.propTypes = {
  goToNext: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  reveal: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
