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
<<<<<<< HEAD
          <Data getData={this.getAPI.bind(this)} />
=======
          <Data />
>>>>>>> 8cbe58ba63fbedef0d6fcb5ea3a98622fb953bc4
      </div>
    );
  }
}

export default App;
