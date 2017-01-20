import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div>
          <div>
                <h1>Title</h1>
          </div>
        <nav>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/another" activeClassName="active">Another</Link></li>
          </ul>
        </nav>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
