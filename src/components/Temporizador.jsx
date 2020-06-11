import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { stopTime, setTimerValue } from '../actions/game';

class Temporizador extends React.Component {
  componentDidMount() {
    this.timer();
  }

  timer() {
    const { time, setTime, timeOUT } = this.props;
    setTimeout(() => {
      if (time === 0) return timeOUT(0);
      setTime(time - 1);
      return this.timer();
    }, 1000);
  }

  render() {
    const { time } = this.props;
    return (
      <div>
        <h3>Tempo: {time}</h3>
      </div>
    );
  }
}

Temporizador.propTypes = {
  time: PropTypes.number.isRequired,
  timeOUT: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
};

const mapStateToProps = ({ game: { time } }) => ({ time });

const mapDispatchToProps = (dispatch) => ({
  timeOUT: () => dispatch(stopTime()),
  setTime: (time) => dispatch(setTimerValue(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Temporizador);
