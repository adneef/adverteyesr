import React, { Component } from 'react';
import Header from './common/Header'
import Toolbar from './common/Toolbar'
import Data from './common/Data'

class App extends Component {
  render() {
    return (
      <div>
          <h1>Welcome to AdvertEyesr</h1>
          <Header />
          <Toolbar />
          <Data />
      </div>
    );
  }
}

export default App;
