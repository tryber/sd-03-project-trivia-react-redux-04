import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { takeStorageToken } from '../services/tokenAPI';
import fetchQuestions from '../actions/questionsAPI';
import Temporizador from './Temporizador';

class Game extends React.Component {
  componentDidMount() {
    const { startGame } = this.props;
    startGame(takeStorageToken());
  }

  render() {
    return (
      <div>
        <h1>This is the <strong>Game</strong> page</h1>
        <div>
          <Temporizador />
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  startGame: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  startGame: (token) => dispatch(fetchQuestions(token)),
});

export default connect(null, mapDispatchToProps)(Game);
