import React, { Component } from 'react';
import Print from './Print';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <Print />
      </div>
    );
  }
}

export default App;
