import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS_Components/Config.css';

const category = [
  'Categoria',
  'General Knowledge',
  'Entertainment: Books',
  'Entertainment: Film',
  'Entertainment: Music',
  'Entertainment: Musicals & Theatres',
  'Entertainment: Television',
  'Entertainment: Video Games',
  'Entertainment: Board Games',
  'Science & Nature',
  'Science: Computers',
  'Science: Mathematics',
  'Mythology',
  'Sports',
  'Geography',
  'History',
  'Politics',
  'Art',
  'Celebrities',
  'Animals',
  'Vehicles',
  'Entertainment: Comics',
  'Science: Gadgets',
  'Entertainment: Japanese Anime & Manga',
  'Entertainment: Cartoon & Animations',
];
const difficulty = ['Dificuldade', 'easy', 'medium', 'hard'];
const type = ['Tipo', 'multiple', 'boolean'];

export class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      difficulty: '',
      type: '',
    };
  }
  render() {
    return (
      <div className="config">
        <h1 data-testid="settings-title">Configurações</h1>
        <div className="selects">
          <select className="inputs" onChange={(e) => this.setState({ category: e.target.value })}>
            Categoria
        {category.map((e) => <option key={e}>{e}</option>)}
          </select>
          <select className="inpt" onChange={(e) => this.setState({ difficulty: e.target.value })}>
            Dificuldade
        {difficulty.map((e) => <option key={e}>{e}</option>)}
          </select>
          <select className="inputs" onChange={(e) => this.setState({ type: e.target.value })}>
            Tipo
        {type.map((e) => <option key={e}>{e}</option>)}
          </select>
        </div>
        <button
          className="btn btn-play btn-outline-dark" 
          onClick={() => alert('Preencha seus dados na tela inicial!')}
        >
          Jogar
        </button>
        <Link className="text-dark" to="/">Início</Link>
      </div>
    );
  }
}

export default Config;
