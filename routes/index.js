'use strict'

const express = require('express')
const SolicitudCtrl = require('../controllers/solicitud')
const PreguntaCtrl = require('../controllers/pregunta')
const VentaCtrl = require('../controllers/venta')
const ClienteCtrl = require('../controllers/cliente')
const api = express.Router()

api.get('/solicitud', SolicitudCtrl.getSolicitudes) // mostrar uno
api.get('/solicitud/:solicitudId', SolicitudCtrl.getSolicitud) // mostrar todos
api.post('/solicitud', SolicitudCtrl.saveSolicitud) // nuevo
api.put('/solicitud/:solicitudId', SolicitudCtrl.updateSolicitud) // actualizar
api.delete('/solicitud/:solicitudId', SolicitudCtrl.deleteSolicitud) // eliminar

api.get('/pregunta', PreguntaCtrl.getPreguntas) // mostrar uno
api.get('/pregunta/:preguntaId', PreguntaCtrl.getPregunta) // mostrar todos
api.post('/pregunta', PreguntaCtrl.savePregunta) // nuevo

api.put('/pregunta/:preguntaId', PreguntaCtrl.updatePregunta) // actualizar
api.put('/pregunta/agregar/:preguntaId', PreguntaCtrl.updatePreguntas) // nueva pregunta

api.delete('/pregunta/:preguntaId', PreguntaCtrl.deletePregunta) // eliminar

// api.get('/venta', VentaCtrl.getVentas) // mostrar uno
// api.get('/venta/:codigoVenta', VentaCtrl.getVenta) // mostrar todos
// api.post('/venta', VentaCtrl.saveVenta)
// // api.post('/venta/:correo', VentaCtrl.getPoliza) // obtener 
// api.put('/venta/:codigoVenta', VentaCtrl.updateVenta) // actualizar
// api.delete('/venta/:codigoVenta', VentaCtrl.deleteVenta) // eliminar

// api.get('/cliente', ClienteCtrl.getClientes) // mostrar uno
// api.get('/cliente/:correo', ClienteCtrl.getCliente) // mostrar todos
// api.post('/cliente', ClienteCtrl.saveCliente)

module.exports = api
