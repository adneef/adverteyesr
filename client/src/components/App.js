import React, { Component } from 'react';
import Header from './common/Header'
import Toolbar from './common/Toolbar'
import Data from './common/Data'
// import TwitterAPI from './TwitterAPI'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { locations: [] }
  }

  // componentDidMount() {
  //   TwitterAPI()
  // }


  render() {
    return (
      <div>
          <h1>Welcome to AdvertEyesr</h1>
          <Header />
          <Toolbar />
          <Data getData={this.getAPI.bind(this)} />
          <Data />
      </div>
    );
  }
}

export default App;
