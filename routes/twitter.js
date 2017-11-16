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

  t.get('search/tweets', { q: 'ThrowbackThursday', count: 200 }, gotData)

  function gotData(err, data, response) {
    const locations = data.statuses.map(item => item.user.location)
    console.log('LOCATIONS FROM API CALL: ', locations);
  }

});

module.exports = router;
