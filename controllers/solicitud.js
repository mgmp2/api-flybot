'use strict'
const Solicitud = require('../models/solicitud')


function getSolicitud(req, res) {
  let solicitudId = req.params.solicitudId

  Solicitud.findById(solicitudId, (err, solicitud) => {
    if (err) return res.status(500).send({message: 'Error al realizar la peticion'})
    if(!solicitud) return res.status(400).send({message: 'La solicitud no existe'})

    res.status(200).send({solicitud})
  })
}


function getSolicitudes (req, res) {
  Solicitud.find({}, (err, solicitudes) => {
    if (err) return res.status(500).send({message: 'Error al realizar la peticion de todos los solicitudos'})
    if(!solicitudes) return res.status(400).send({message: 'No existe solicitudes'})
    res.status(200).send({solicitudes})
  })
}

function saveSolicitud(req, res) {
  let solicitud = new Solicitud()
  solicitud.estado = req.body.estado
  solicitud.datos = req.body.datos
  solicitud.nivelSolicitud = req.body.nivelSolicitud
  solicitud.sesionDF = req.body.sesionDF

  solicitud.save((err, solicitudStored) => {
    if (err) {
      res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
    } else {
      res.status(200).send({codigoSolicitud: solicitudStored._id})
    }
  })
}

function updateSolicitud(req, res) {
  let solicitudId = req.params.solicitudId
  let update = req.body
  Solicitud.findByIdAndUpdate(solicitudId, update, (err, solicitudUpdated) => {
    if(err) res.status(500).send({ message: `Error al actualizar el solicitudo: ${err}`})
    res.status(200).send({ message: `La solicitud se ha actualizado`})
  })
}

function deleteSolicitud(req, res) {
  let solicitudId = req.params.solicitudId

  Solicitud.findById(solicitudId, (err, solicitud) => {
    if(err) res.status(500).send({ message: `Error al borrar el solicitudo: ${err}`})

    solicitud.remove(err => {
      if(err) res.status(500).send({ message: `Error al borrar el solicitudo: ${err}`})
      res.status(200).send({ message: `La solicitud se ha eliminado`})
    })
  })
}

module.exports  = {
  getSolicitud,
  getSolicitudes,
  saveSolicitud,
  updateSolicitud,
  deleteSolicitud
}
