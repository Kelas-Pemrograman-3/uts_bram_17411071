const mahasiswamodel = require ('../models/mahasiswam')

exports.simpanmahasiswa = (data) =>
new Promise ((resolve, reject) => {
  mahasiswamodel.create(data)
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