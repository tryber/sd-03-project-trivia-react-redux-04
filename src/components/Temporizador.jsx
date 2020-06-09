import React from 'react';

class Temporizador extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 30 }
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount() {
    this.timer();
  }

  timer() {
    const time = this.state.time;
    setTimeout(() => {
      this.setState({
        time: time - 1,
      })
      if(time === 0) return this.stopTimer(time);
      return this.timer()
    }, 1000);
  }

  stopTimer() {
    this.setState({ time: 0 })
  }

  render() {
    const time = this.state.time;
    return (
      <div>
        <h3>Tempo: {time}</h3>
      </div>
    );
  }
}

export default Temporizador;
