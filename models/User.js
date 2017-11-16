const { mongoose } = require('../config/mongooseConfig')
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  searches: Array
})

mongoose.model('users', userSchema)
