import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { goToNextQuestion } from '../actions/game';

class NextButton extends React.Component {
  render() {
    const { goToNext } = this.props;

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
});

const mapDispatchToProps = (dispatch) => ({
  goToNext: (id) => (() => dispatch(goToNextQuestion(id))),
});

NextButton.propTypes = {
  goToNext: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
