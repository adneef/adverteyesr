
    const Twit = require('twit')
    // var config = require('./config/keys') //this is we import the config

    const t = new Twit({
      consumer_key: '6pqWkbCsxqFApKczNkkT7PkIz',
      consumer_secret: 'HOQctxlGDCNrnoXLBz9Uqv5bcXr9XmkEJofpv79q6u80YcshdX',
      access_token: '458781911-GyH59giIg3zK1uZITlrjoWduFY2bbbJSBQUWZ6yK',
      access_token_secret: 'KOKGWEejvwL4CY8UT2PfYBMifYlYzIbLDRCVBRAzllb6w'
    })

    // tweets by query, word appears in tweet
    t.get('search/tweets', { q: '#WednesdayWisdom', count: 200 }, gotData)

    // current trends by specific location
    // t.get('trends/place', { id: 1, count: 5 }, gotData)

    // trends available near an area
    // t.get('trends/available', { q: 'snow' }, gotData)

    // search for cities by name
    // t.get('geo/search', { ip: '74.125.19.104', max_results: 3 }, gotData)

    // t.get('statuses/show/:id', { id: '930861102518300672', max_results: 3 }, gotData)


    function gotData(err, data, response) {
      // console.log(data.statuses);
      // console.log(data.result.places[0].contained_within);
      // console.log(data[0].trends);
      // console.log('DATA FROM API CALL: ', data.statuses);
      // console.log(err, data, response);
      const locations = data.statuses.map(item => item.user.location)
      console.log('LOCATIONS FROM API CALL: ', locations);
    }

module.export = {
  gotData
}
