const passport = require('passport')

module.exports = (app) => {

  // app.get('/auth/google',
  //   passport.authenticate('google', {scope: 'profile'})
  // )
  // app.get('/auth/google/callback',
  //   passport.authenticate('google', {failureRedirect: '/login'}),
  //   (req, res) => {
  //
  //     console.log('Successful google authentication')
  //     res.redirect('/api/current_user');
  //   }
  // )
  //
  // app.get('/api/current_user', (req, res) => {
  //   res.send(req.user)
  //
  // })
  //
  // app.get('/api/logout', (req, res) => {
  //   req.logout()
  //   res.send(req.user)
  // })

//   app.get('/auth/facebook', passport.authenticate('facebook'))
//
//   app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }))
// }

// app.get('/auth/twitter',
//   passport.authenticate('twitter')
// )
// app.get('/auth/twitter/callback',
//   passport.authenticate('twitter', { failureRedirect: '/login' })
//     function(req, res) {
//       console.log('Successful twitter authentication, redirect home.')
//       res.redirect('/');
//    }
// )
}
