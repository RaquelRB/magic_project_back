// CARD model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String },
  manaCost: { type: [{String}] },
  colorIdentity: { type: [String] },
  type: { type: String },
  power: { type: String },
  toughness: { type: String },
  imageUrl: { type: String }
//   dueDate: { type: Date, default: Date.now() },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
//   priority: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;