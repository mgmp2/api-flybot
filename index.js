'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

//Levantar host por un puerto y conectarse a la bd
mongoose.connect(config.db, { useNewUrlParser: true }, (err, res) => {
  if(err) {
    return console.log(`Error al conectar a la base de datos ${err}`)
  }
  console.log('Conexion a la base de datos establecido')

  app.listen(config.port, () => {
    console.log('API RESTfull en el puerto ', config.port)
  })
})
