var express = require('express');
var router = express.Router();


router.get('/api/search', function(req, res, next) {
  console.log('*****req.query.term if we made it to api/search', req.query.term);
  console.log('*****req.body if we made it to api/search', req.body);
    console.log('*****req.params if we made it to api/search', req.params);
  res.send('reached api search route');
});

module.exports = router;
