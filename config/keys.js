// module.exports = {
//   googleClientID: '767696723274-l1s6nh96rsub2ttre087s2c7j1v0h3jb.apps.googleusercontent.com',
//   googleClientSecret: 'PttVCI4U4Oi_M8w0ATqc-L6j',
//   twitterConsumerKey: 'SZ2GnUydggg32GFRJ9UE8gjp8',
//   twitterConsumerSecret: 'o1gikqVhx33Vh2bAY0CHOOwZA0FpfuIhyI2xwBFXWkcPG6Nioe',
//   mongoURI: 'mongodb://admin:password@ds163745.mlab.com:63745/adverteyesr-dev',
//   cookieKey: 'eiutnmnsldiehwqod,ld,paowuw82920wkskskkwpw[]'
// }
if (process.env.NODE_ENV === 'production') {
  //return prod keys
  module.exports = require('./prod')
} else {
  //in dev
  module.exports = require('./dev')
}
