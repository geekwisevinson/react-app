import React from 'react';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello, World!',
    };

    this.reverse = this.reverse.bind(this);
  }

  handleRedirect() {
    browserHistory.push('/');
  }

  reverse() {
    this.setState({
      greeting: this.state.greeting.split('').reverse().join('')
    });
  }


  render() {
    return (

      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.reverse}>Flip</button>
      </div>
    );
  }
}
