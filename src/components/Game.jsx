import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Temporizador from './Temporizador';
import Header from './Header';
import Alternative from './Alternative';
import NextButton from './NextButton';

import { takeStorageToken, sendScoreBoard } from '../services/localStorageAPI';
import fetchQuestions, { prepareToRestart } from '../actions/questionsAPI';
import { goToQuestion } from '../actions/game';

class Game extends React.Component {
  componentDidMount() {
    this.props.startGame(takeStorageToken());
  }

  renderShuffledAlternatives() {
    const { question } = this.props;
    const { correct_answer: correct, incorrect_answers: wrongs, difficulty } = question;
    const wrongBtns = wrongs.map((answer, index) => (
      <Alternative
        key={answer}
        type="wrong-answer"
        index={index}
        text={answer}
        difficult={difficulty}
      />
    ));

    return [
      ...wrongBtns,
      <Alternative key={correct} type="correct-answer" text={correct} difficult={difficulty} />,
    ].sort(() => Math.floor(Math.random() * 3) - 1);
  }

  endGame() {
    this.props.reset();
    sendScoreBoard();
    return <Redirect to="/feedback" />;
  };  

  render() {
    const { loading, question } = this.props;
    if (loading) return <h1>Prepare-se</h1>;
    else if (question === null) return this.endGame();
    return (
      <div>
        <div>
          <Header shouldShowScore={false} />
        </div>
        <div data-testid="question-category">{question.category}</div>
        <div data-testid="question-text">{question.question}</div>
        <div>
          {this.renderShuffledAlternatives()}
        </div>
        <div>
          <NextButton />
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
  reset: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,

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
};

const mapStateToProps = ({ game: { questionID }, APIQuestions: { questions, loading } }) => ({
  question: questions[questionID],
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: (token) => dispatch(fetchQuestions(token)),
  reset: () => { dispatch(goToQuestion(0)); dispatch(prepareToRestart()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
