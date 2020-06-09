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
      shouldRedirect: false,
      error: '',
    };

    this.takeToken = this.takeToken.bind(this);
  }

  async takeToken() {
    if (haveAnToken()) return this.setState({ shouldRedirect: true });
    return await fetchToken()
      .then(
        () => this.setState({ shouldRedirect: true }),
        (error) => this.setState({ error }),
      )
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return (<Redirect to="/game" />);
    return (
      <div>
        <h1>This is the <strong>Home</strong> page</h1>
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
};

export default Home;
