const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  searches: Array
})

mongoose.model('users', userSchema)
