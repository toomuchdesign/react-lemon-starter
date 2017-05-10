import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const lemons = [];

    for (let i = 0; i < this.state.counter; i += 1) {
      lemons.push(<span key={i}>&#127819;</span>);
    }

    return (
      <div>
        <h3>Lemons: {this.state.counter}</h3>
        <div>{lemons}</div>
      </div>
    );
  }
}
