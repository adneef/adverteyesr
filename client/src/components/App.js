import React, { Component } from 'react';
import Header from './common/Header'
import Toolbar from './common/Toolbar'
import Data from './common/Data'

class App extends Component {


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


  }













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
