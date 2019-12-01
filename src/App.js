import React, { Component } from 'react';

import { Title } from './styles'

class App extends Component {
  render() {
    return (
      <div>
        <Title>
          Hello World
          <span>texto menor</span>
        </Title>
      </div>
    );
  }
}

export default App;
