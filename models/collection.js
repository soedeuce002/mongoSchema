const mongoose = require('mongoose');


const Schema = mongoose.Schema;




const fabricSchema = new Schema({
  type: {type: String, required: true},
  yards: {type: Number, required: true},
  description: {
    color: String,
    sparkly: Boolean,
    patterned: Boolean
  },
    purchasedAt: ["Joann", "Hobby Lobby", "Michael's", "Etsy"]
})

console.log(fabricSchema)
const Collection = mongoose.model('Collection', fabricSchema)

module.exports = Collection;
