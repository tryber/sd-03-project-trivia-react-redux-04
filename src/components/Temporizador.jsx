import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { stopTime, setTimerValue, timeID } from '../actions/game';

class Temporizador extends React.Component {
  componentDidMount() {
    this.timerUpdate();
  }

  componentWillReceiveProps(status) {
    if (this.props.status !== status.status) return this.timerUpdate();
    return null;
  }

  timerUpdate() {
    const { setTime, timeOut, sendID } = this.props;
    let sec = 30;
    const id = setInterval(() => {
      if (sec === 0) return timeOut();
      sec -= 1;
      return setTime(sec);
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
  status: PropTypes.string.isRequired,
};

const mapStateToProps = ({ game: { time } }) => ({ time });

const mapDispatchToProps = (dispatch) => ({
  timeOut: () => dispatch(stopTime()),
  setTime: (time) => dispatch(setTimerValue(time)),
  sendID: (id) => dispatch(timeID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Temporizador);
