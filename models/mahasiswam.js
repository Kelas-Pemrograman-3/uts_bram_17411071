const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const mahasiswamSchema = new Schema({
  npm : {
    type : String
  },
  password : {
    type : String
  },
  nama : {
    type : String
  },
  prodi : {
    type : String
  }
})

module.exports = mongoose.model('mahasiswa', mahasiswamSchema)
