import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { goToQuestion } from '../actions/game';
import { prepareToRestart } from '../actions/questionsAPI';

class NextButton extends React.Component {
  render() {
    const { goToNext, reveal, id, questionsQuantity, reset  } = this.props;
    if (!reveal) return null;
    return (
      <button
        className="btn btn-outline-dark"
        data-testid="btn-next"
        type="button"
        onClick={id === questionsQuantity - 1 ? reset : goToNext(id)}
      >
        Próxima
      </button>
    );
  }
}

const mapStateToProps = ({ game, APIQuestions }) => ({
  id: game.questionID,
  reveal: game.reveal,
  time: game.time,
  questionsQuantity: APIQuestions.questions.length,
});

const mapDispatchToProps = (dispatch) => ({
  goToNext: (id) => (() => dispatch(goToQuestion(id + 1))),
  reset: () => dispatch(prepareToRestart()),
});

NextButton.propTypes = {
  reset: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  reveal: PropTypes.bool.isRequired,
  questionsQuantity: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);
