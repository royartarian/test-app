import React from "react";

class Clock extends React.Component {
  state = { clock: null };
  componentDidMount() {
    let time = 0;
    setInterval(() => {
      time = new Date().toLocaleTimeString();
      this.setState({clock: time})
    }, 1000);
  }

  render() {
    return <div className="time">The time is: {this.state.clock}</div>;
  }
}

export default Clock;
