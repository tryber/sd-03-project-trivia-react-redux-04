import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import fetchQuestions from '../actions/questionsAPI';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    }
  }

  handleChangeInput(name, value) {
    const 
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { takeToken } = this.props;
    console.log(this.state)
    return (
      <div>
        <input
          data-testid="input-player-name"
          onChange={(e) => this.handleChangeInput('name', e.target.value)}
          type="text"
        />
        <input
          data-testid="input-gravatar-email"
          onChange={(e) => this.handleChangeInput('email', e.target.value)}
          type="text"
        />
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
