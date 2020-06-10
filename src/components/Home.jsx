import React from 'react';
import { Redirect } from 'react-router-dom';
import MD5 from 'crypto-js/md5';

import {
  fetchToken,
  takeStorageToken as haveAnToken,
} from '../services/tokenAPI';

const sendToUserLocalStorage = (user, gravatarHash) => {
  const memory = {
    player: {
      name: user,
      assertions: '',
      score: '',
      gravatarEmail: gravatarHash,
    },
  };
  localStorage.setItem('state', JSON.stringify(memory));
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      shouldRedirect: false,
      error: '',
      gravatarEmail: '',
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
    const { name, gravatarEmail } = this.state;
    sendToUserLocalStorage(name, gravatarEmail);
    if (haveAnToken()) return this.setState({ shouldRedirect: true });
    return fetchToken()
      .then(
        () => this.setState({ shouldRedirect: true }),
        (error) => this.setState({ error }),
      );
  }

  hashGravatar(email) {
    this.handleChangeInput('email', email);
    const hash = MD5(email).toString();
    return this.setState({ gravatarEmail: `https://www.gravatar.com/avatar/${hash}` });
  }

  render() {
    const { shouldRedirect, error, name, email } = this.state;
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
          onChange={(e) => this.hashGravatar(e.target.value)}
          type="text"
        />
        <button
          disabled={(!name || !email)}
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
