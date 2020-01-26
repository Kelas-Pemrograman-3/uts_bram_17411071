const matakuliahmodel = require ('../models/matakuliahm')

exports.simpanmatakuliah = (data) =>
new Promise ((resolve, reject) => {
  matakuliahmodel.create(data)
  .then (res => {
    resolve({
      error: false,
      pesan: 'Anda Berhasil'
    })
  })
  .catch (() => {
    reject({
      error: true,
      pesan: 'Anda Gagal'
    })
  })
})