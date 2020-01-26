const server = require('express')()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const port = 5000

const mongoURI = 'mongodb://localhost:port:27017/latihan'

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connect to db Success')
})
.catch(err => {
  console.log('Error : ' + err)
})

server.use(bodyparser.json({
  extended: 'true',
  limit: '50Mb'
}))

server.use(bodyparser.urlencoded({
  extended: 'true',
  limit: '50Mb'
}))

server.use('/mahasiswa', require("./routers/mahasiswaro"))
server.use('/matakuliah', require("./routers/matakuliahro"))

server.listen(port, function() {
  console.log('Server Started on Port' + port)
})