import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      charsRemaining: 140
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      charsRemaining: 140 - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;