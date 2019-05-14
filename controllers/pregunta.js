'use strict'
const Pregunta = require('../models/pregunta')


function getPregunta(req, res) {
  let preguntaId = req.params.preguntaId

  Pregunta.findById(preguntaId, (err, pregunta) => {
    if (err) return res.status(500).send({message: 'Error al realizar la peticion'})
    if(!pregunta) return res.status(400).send({message: 'La pregunta no existe'})

    res.status(200).send({pregunta})
  })
}


function getPreguntas (req, res) {
  Pregunta.find({}, (err, preguntas) => {
    if (err) return res.status(500).send({message: 'Error al realizar la peticion de todos los preguntaos'})
    if(!preguntas) return res.status(400).send({message: 'No existe preguntas'})
    res.status(200).send({preguntas})
  })
}

function savePregunta(req, res) {
  let pregunta = new Pregunta()
  pregunta.sesionDF = req.body.sesionDF
  pregunta.preguntas = req.body.preguntas

  pregunta.save((err, preguntaStored) => {
    if (err) {
      res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
    } else {
      res.status(200).send({codigoPregunta: preguntaStored})
    }
  })
}

function updatePregunta(req, res) {
  let preguntaId = req.params.preguntaId
  let update = req.body
  Pregunta.findByIdAndUpdate(preguntaId, update, (err, preguntaUpdated) => {
    if(err) res.status(500).send({ message: `Error al actualizar la pregunta: ${err}`})
    res.status(200).send({ message: `La pregunta se ha actualizado`, preguntaUpdated})
  })
}
//////////////////////////////////----------------------------
function updatePreguntas(req, res) {
  let preguntaId = req.params.preguntaId
  let updatex = req.body.preguntas
  Pregunta.findOneAndUpdate({sesionDF: preguntaId}, { $push: { preguntas: updatex  } }, (err, preguntaUpdated) => {
    if(err) res.status(500).send({ message: `Error al actualizar la pregunta: ${err}`})
    res.status(200).send({ message: `La pregunta se ha actualizado`, preguntaUpdated})
  })
}

function deletePregunta(req, res) {
  let preguntaId = req.params.preguntaId

  Pregunta.findById(preguntaId, (err, pregunta) => {
    if(err) res.status(500).send({ message: `Error al borrar la pregunta: ${err}`})

    pregunta.remove(err => {
      if(err) res.status(500).send({ message: `Error al borrar la pregunta: ${err}`})
      res.status(200).send({ message: `La pregunta se ha eliminado`})
    })
  })
}

module.exports  = {
  getPregunta,
  getPreguntas,
  savePregunta,
  updatePregunta,
  updatePreguntas,
  deletePregunta
}
