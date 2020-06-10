import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { takeStorageToken } from '../services/tokenAPI';
import fetchQuestions from '../actions/questionsAPI';
import Temporizador from './Temporizador';
import Alternative from './Alternative';

class Game extends React.Component {
  componentDidMount() {
    const { startGame } = this.props;
    startGame(takeStorageToken());
  }

  renderShuffledAlternatives() {
    const { question: { correct_answer: correct, incorrect_answers: wrongs } } = this.props;
    const wrongBtns = wrongs.map((answer, index) => (
      <Alternative key={answer} type="wrong-answer" index={index} text={answer} />
    ));
    return [
      ...wrongBtns,
      <Alternative key={correct} type="correct-answer" text={correct} />,
    ].sort(() => Math.floor(Math.random() * 3) - 1);
  }

  render() {
    const { question } = this.props;
    if (!question) return <h1>Prepare-se</h1>;
    return (
      <div>
        <div>
          {this.renderShuffledAlternatives()}
        </div>
        <div>
          <Temporizador />
        </div>
      </div>
    );
  }
}

Game.defaultProps = {
  question: null,
};

Game.propTypes = {
  startGame: PropTypes.func.isRequired,

  question: PropTypes.shape({
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    correct_answer: PropTypes.oneOfType(
      [PropTypes.string.isRequired, PropTypes.bool.isRequired],
    ).isRequired,
    incorrect_answers: PropTypes.arrayOf(
      PropTypes.oneOfType(
        [PropTypes.string.isRequired, PropTypes.bool.isRequired],
      ).isRequired,
    ).isRequired,
    question: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['multiple', 'boolean']).isRequired,
  }),

  questionID: PropTypes.number.isRequired,
};

const mapStateToProps = ({ game: { questionID }, APIQuestions: { questions } }) => ({
  question: questions[questionID],
  questionID,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: (token) => dispatch(fetchQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
