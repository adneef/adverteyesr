if (process.env.NODE_ENV === 'production') {
  //return prod keys
  module.exports = require('./prod')
} else {
  //in dev
  module.exports = require('./dev')
}
