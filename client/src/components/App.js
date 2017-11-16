import React, { Component } from 'react';
import Header from './common/Header'
import Toolbar from './common/Toolbar'
import Data from './common/Data'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { searchResults: [] }
  }

  async componentDidMount() {
    const response =  await fetch(`${process.env.REACT_APP_API_URL}/twitter`)
    // const json = await response.json()
    // console.log(json);
    // this.setState({ messages: json, filtered: json })
  }

  // async request (path, method = 'GET', body = null) {
  //   if (body) {
  //     body = JSON.stringify(body)
  //   }
  //   return await fetch(`${process.env.REACT_APP_API_URL}${path}`,
  //   { method,
  //     headers: {'Content-Type': 'application/json',
  //             'Accept': 'application/json'},
  //     body
  //   })
  // }

  submitSearch = async (value) => {
    // console.log('value being searched ', value)
    // const data = await this.request(`/api/search?term=${value}`)
    // const jsonData = await data.json()
    // console.log('jsonData ', jsonData);
    // this.setState({searchResults: jsonData, lastSearch: value})
  }

  displaySaved = (value) => {

  }

  async testingAPIRoute(path, value) {
    let api = await fetch(`${process.env.REACT_APP_API_URL}/twitter`)
    console.log('THIS IS THE VALUE: ', value);
    console.log('THIS IS THE API ROUTE FROM CLIENT ', api);
  }

  render() {
    return (
      <div>
          <h1>Welcome to AdvertEyesr</h1>
          <Header />
          <Toolbar
            submitSearch={this.submitSearch}
            displaySaved={this.displaySaved}
            testingAPIRoute={this.testingAPIRoute}
          />
          <Data />
      </div>
    );
  }
}

export default App;
