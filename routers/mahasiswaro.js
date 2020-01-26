const mahasiswaro = require ('express') ()
const mahasiswacontroller = require('../controller/mahasiswa')

mahasiswaro.post('/simpan', (req, res) => {
  mahasiswacontroller.simpanmahasiswa(req.body)
  .then(result => {
    res.json(result)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = mahasiswaro