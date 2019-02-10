import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LemonsCounter extends Component {
  componentDidMount() {
    if (this.props.onTickFunction) {
      this.interval = setInterval(
        this.props.onTickFunction,
        this.props.interval,
      );
    }
  }

  componentWillUnmount() {
    if (this.props.onTickFunction) {
      clearInterval(this.interval);
    }
  }

  render() {
    const lemons = [];

    for (let i = 0; i < this.props.count; i += 1) {
      lemons.push(<span key={i}>&#127819;</span>);
    }

    return (
      <div>
        <h3>Lemons: {this.props.count}</h3>
        <div>{lemons}</div>
      </div>
    );
  }
}

LemonsCounter.propTypes = {
  count: PropTypes.number.isRequired,
  interval: PropTypes.number,
  onTickFunction: PropTypes.func,
  onTickFunction: PropTypes.func,
};

LemonsCounter.defaultProps = {
  count: 0,
  interval: 1000,
};
