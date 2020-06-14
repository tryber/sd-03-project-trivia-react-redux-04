import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import MD5 from 'crypto-js/md5';

import './CSS_Components/Home.css';

import {
  fetchToken,
  takeStorageToken as haveAnToken,
} from '../services/localStorageAPI';

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

  renderComponent() {
    const { name, email } = this.state;
    return (
      <div className="card-body initial-page-game border-secondary">
        <h1 className="card-header"><strong>MANIREACT</strong></h1>
        <Link className="text-dark" data-testid="btn-settings" to="/config">Configurações</Link>
        <input
          className="input-user"
          data-testid="input-player-name"
          onChange={(e) => this.handleChangeInput('name', e.target.value.toLocaleUpperCase())}
          type="text"
          value={name}
        />
        <input
          className="input-user"
          data-testid="input-gravatar-email"
          onChange={(e) => this.hashGravatar(e.target.value)}
          type="email"
          value={email}
        />
        <button
          className="btn-play btn-outline-dark btn-sm"
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

  render() {
    const { shouldRedirect, error } = this.state;
    if (error.length !== 0) return (<div>We failed</div>);
    else if (shouldRedirect) return (<Redirect to="/game" />);
    return (
      <div>
        {this.renderComponent()}
      </div>
    );
  }
}

export default Home;
