const bluebird = require('bluebird');
const mongoose = require('mongoose');
const keys = require('./keys')
mongoose.Promise = bluebird;
mongoose.connect(keys.mongoURI)
module.exports = { mongoose }
