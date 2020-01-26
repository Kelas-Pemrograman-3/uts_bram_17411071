const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const matakuliahmSchema = new Schema({
  namamk: {
    type : String
  },
  jam: {
    type : String
  },
  ruang: {
    type : String
  },
  IDdosen: {
    type : String
  },
  namadosen: {
    type : String
  }
})

module.exports = mongoose.model('matakuliah', matakuliahmSchema)