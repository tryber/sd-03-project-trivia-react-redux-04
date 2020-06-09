import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchQuestions from '../actions/questionsAPI';

class Game extends React.Component{
  componentDidUpdate(prevProps) {
    const { token, startGame } = this.props;
    if (prevProps.token !== token) startGame(token);
  }

  render() {
    return (
      <div>
        <h1>This is the <strong>Game</strong> page</h1>
      </div>
    );
  }
}

Game.propTypes = {
  token: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired,
};

const mapStateToProps = ({ APIQuestions }) => ({
  token: APIQuestions.token,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: (token) => dispatch(fetchQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
