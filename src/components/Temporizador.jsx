import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { stopTime, setTimerValue, timeID } from '../actions/game';

class Temporizador extends React.Component {
  componentDidMount() {
    const { setTime, timeOut, sendID } = this.props;
    let { time } = this.props;
    const id = setInterval(() => {
      if (time === 0) return timeOut();
      time -= 1
      return setTime(time);
    }, 1000);
    sendID(id);
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
  timeOut: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired,
  sendID: PropTypes.func.isRequired,
};

const mapStateToProps = ({ game: { time } }) => ({ time });

const mapDispatchToProps = (dispatch) => ({
  timeOut: () => dispatch(stopTime()),
  setTime: (time) => dispatch(setTimerValue(time)),
  sendID: (id) => dispatch(timeID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Temporizador);
