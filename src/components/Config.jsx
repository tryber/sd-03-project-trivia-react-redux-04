import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import './CSS_Components/Config.css';

export class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [{ name: 'Loading'}],
      category: '',
      difficulty: '',
      type: '',
    };
  }

  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then(({ trivia_categories: categories }) => this.setState({ categories }))
      .catch((error) => console.log('Take Categories failed', error));
  }

  renderSelect(label, list, name) {
    const options = (
      label === 'Categoria'
        ? list.map((item) => <option value={item.id} key={item.name}>{item.name}</option>)
        : ['', ...list].map((item) => <option value={item} key={item}>{item}</option>)
    );

    return (
      <label htmlFor={name}>
        {label}
        <select
          className="inputs"
          id={name}
          onChange={({ target }) => this.setState({ [target.name]: target.value })}
          name={name}
          value={this.state[name]}
        >
          {options}
        </select>
      </label>
    );
  }

  handleComeBack() {
    const { category, difficulty, type } = this.state;
    localStorage.setItem('config', JSON.stringify({ category, difficulty, type }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="config">
        <Header />
        <h1 data-testid="settings-title">Configurações</h1>
        <div className="selects">
          {this.renderSelect('Categoria', categories, 'category')}
          {this.renderSelect('Dificuldade', ['easy', 'medium', 'hard'], 'difficulty')}
          {this.renderSelect('Tipo', ['multiple', 'boolean'], 'type')}
        </div>
        <button className="btn btn-play btn-outline-dark" onClick={() => this.handleComeBack()}>
          <Link className="text-dark" to="/">
            Início
          </Link>
        </button>
      </div>
    );
  }
}

export default Config;
