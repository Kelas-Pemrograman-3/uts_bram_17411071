const matakuliahro = require ('express') ()
const matakuliahcontroller = require('../controller/matakuliah')

matakuliahro.post('/simpan', (req, res) => {
  matakuliahcontroller.simpanmatakuliah(req.body)
  .then(result => {
    res.json(result)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = matakuliahro