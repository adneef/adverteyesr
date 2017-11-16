import React, { Component } from 'react';
import Header from './common/Header'
import Toolbar from './common/Toolbar'
import Data from './common/Data'
// import TwitterAPI from './TwitterAPI'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {searchResults: []}
  }

  async request (path, method = 'GET', body = null) {
    if (body) {
      body = JSON.stringify(body)
    }
    return await fetch(`${process.env.REACT_APP_API_URL}${path}`,
    { method,
      headers: {'Content-Type': 'application/json',
              'Accept': 'application/json'},
      body
    })
  }

<<<<<<< HEAD
  constructor(props) {
    super(props)
    this.state = { locations: [] }
=======
  submitSearch = async (value) => {
    console.log('value being searched ', value)
    const data = await this.request(`/api/search?term=${value}`)
    const jsonData = await data.json()
    console.log('jsonData ', jsonData);
    this.setState({searchResults: jsonData, lastSearch: value})
  }

  displaySaved = (value) => {

  }

  getAPI() {
    const Twit = require('twit')

    const t = new Twit({
      consumer_key: '6pqWkbCsxqFApKczNkkT7PkIz',
      consumer_secret: 'HOQctxlGDCNrnoXLBz9Uqv5bcXr9XmkEJofpv79q6u80YcshdX',
      access_token: '458781911-GyH59giIg3zK1uZITlrjoWduFY2bbbJSBQUWZ6yK',
      access_token_secret: 'KOKGWEejvwL4CY8UT2PfYBMifYlYzIbLDRCVBRAzllb6w'
    })

    t.get('search/tweets', { q: '#WednesdayWisdom', count: 200 }, gotData)

    function gotData(err, data, response) {
      const locations = data.statuses.map(item => item.user.location)
      console.log('LOCATIONS FROM API CALL: ', locations);
    }
>>>>>>> did some work on components and fetch route
  }

  // componentDidMount() {
  //   TwitterAPI()
  // }


  render() {
    return (
      <div>
          <h1>Welcome to AdvertEyesr</h1>
          <Header />
<<<<<<< HEAD
          <Toolbar />
<<<<<<< HEAD
          <Data getData={this.getAPI.bind(this)} />
=======
=======
          <Toolbar submitSearch={this.submitSearch} displaySaved={this.displaySaved}/>
>>>>>>> did some work on components and fetch route
          <Data />
>>>>>>> 8cbe58ba63fbedef0d6fcb5ea3a98622fb953bc4
      </div>
    );
  }
}

export default App;
