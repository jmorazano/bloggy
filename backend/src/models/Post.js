const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: String,
  urltitle: String,
  body: String,
  lastupdated: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Post', schema)
