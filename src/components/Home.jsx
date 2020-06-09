import React from 'react';
import { Redirect } from 'react-router-dom';

import {
  fetchToken,
  takeStorageToken as haveAnToken,
} from '../services/tokenAPI';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      shouldRedirect: false,
      error: '',
    };

    this.takeToken = this.takeToken.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async takeToken() {
    if (haveAnToken()) return this.setState({ shouldRedirect: true });
    return fetchToken()
      .then(
        () => this.setState({ shouldRedirect: true }),
        (error) => this.setState({ error }),
      );
  }

  render() {
    const { shouldRedirect, error } = this.state;
    if (error.length !== 0) return (<div>We failed</div>);
    else if (shouldRedirect) return (<Redirect to="/game" />);
    return (
      <div>
        <h1>This is the <strong>Home</strong> page</h1>
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
        <button
          data-testid="btn-play"
          onClick={this.takeToken}
          type="button"
        >
          Jogar
        </button>
      </div>
    );
  }
}

export default Home;
