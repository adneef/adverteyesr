var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  const Twit = require('twit')
  // move into keys folder
  const t = new Twit({
    consumer_key: '6pqWkbCsxqFApKczNkkT7PkIz',
    consumer_secret: 'HOQctxlGDCNrnoXLBz9Uqv5bcXr9XmkEJofpv79q6u80YcshdX',
    access_token: '458781911-GyH59giIg3zK1uZITlrjoWduFY2bbbJSBQUWZ6yK',
    access_token_secret: 'KOKGWEejvwL4CY8UT2PfYBMifYlYzIbLDRCVBRAzllb6w'
  })

  // t.get('search/tweets', { q: 'ThrowbackThursday', count: 200 }, gotData)

  // united states
  // t.get('trends/place', { id: 23424977, count: 10 }, gotData)

  //denver co
  t.get('trends/place', { id: 2391279 }, gotData)

  // t.get('geo/search', { query: 'Boulder' }, gotData)


  function gotData(err, data, response) {
    // console.log(data[0]);

    // const trendWithNumbers = data[0].trends.filter(item => {
    //   if (item.tweet_volume) {
    //     console.log(item);
    //   }
    // })
    //
    // console.log(trendWithNumbers);

    // const locations = data.statuses.map(item => item.user.location)
    // console.log('LOCATIONS FROM API CALL: ', locations);

    let filteredTrends = []
    const trends = data[0].trends.map(item => item.name)
    const trendsWithVolume = data[0].trends.filter(item => {
      if (item.tweet_volume) {
        filteredTrends.push({
          name: item.name,
          tweets: item.tweet_volume
        })
      }
    })
    // console.log(filteredTrends);
    // sort objects in arrary by tweet volume
    let sort_by = function(field, reverse, primer){
      let key = primer ?
        function(x) {return primer(x[field])} :
        function(x) {return x[field]};
      reverse = -1
      return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      }
    }
    let organizedTrends = filteredTrends.sort(sort_by('tweets'))
    console.log(organizedTrends);

  }

});

module.exports = router;
