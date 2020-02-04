const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const skateParkSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  region: { type: String, required: true },
  image: { type: String, required: true },
  cost: { type: Boolean, required: true },
  indoor: { type: Boolean, required: true },
  material: { type: String, required: true },
  detail: { type: String , required: true },
  comments: [commentSchema],
  locationLng: { type: Number, required: true },
  locationLat: { type: Number, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('skatePark', skateParkSchema)


