import React from 'react';
import { connect } from 'react-redux';

const category = [];
const difficulty = ['easy', 'medium', 'hard'];
const type = [];

const Config = () => (
  <div>
    <h1 data-testid="settings-title">Configurações</h1>
    <div>
      <select>
        Categoria
        {category.map((e) => <option key={e}>{e}</option>)}
      </select>
      <select>
        Dificuldade
        {difficulty.map((e) => <option key={e}>{e}</option>)}
      </select>
      <select>
        Tipo
        {type.map((e) => <option key={e}>{e}</option>)}
      </select>
    </div>
  </div>
);

const mapStateToProps = ({ game: { questionID }, APIQuestions: { questions } }) => ({
  question: questions[questionID],
});

export default connect(mapStateToProps)(Config);
