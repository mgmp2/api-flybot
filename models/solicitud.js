'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SolicitudSchema = Schema({
  estado: {type: Number, default: 1},
  datos: {
    nombreCliente: String,
    voucher: String,
    tipoProducto: {type: String, default: 'ViajeSeguro'},
    correo: String,
    telefono: String
  },
  nivelSolicitud: { type: String, enum: ['preguntasFrecuentes', 'solicitudEspecifica']},
  sesionDF: String
})

module.exports = mongoose.model('Solicitud', SolicitudSchema)
