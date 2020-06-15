import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { goToQuestion } from '../actions/game';

class NextButton extends React.Component {
  render() {
    const { goToNext, reveal } = this.props;

    if (!reveal) return null;
    return (
      <button
        data-testid="btn-next"
        type="button"
        onClick={goToNext(this.props.id)}
      >
        Próxima
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.game.questionID,
  reveal: state.game.reveal,
});

const mapDispatchToProps = (dispatch) => ({
  goToNext: (id) => (() => dispatch(goToQuestion(id + 1))),
});

NextButton.propTypes = {
  goToNext: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  reveal: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
