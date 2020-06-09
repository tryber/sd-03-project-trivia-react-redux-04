import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import fetchQuestions from '../actions/questionsAPI';

class Home extends React.Component {
  render() {
    const { takeToken } = this.props;
    return (
      <div>
        <h1>This is the <strong>Home</strong> page</h1>
        <Link
          to="/game"
          data-testid="btn-play"
          onClick={() => takeToken()}
          type="button"
        >
          Jogar
        </Link>
      </div>
    );
  }
};

Home.propTypes = {
  takeToken: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  takeToken: () => dispatch(fetchQuestions()),
});

export default connect(null, mapDispatchToProps)(Home);
