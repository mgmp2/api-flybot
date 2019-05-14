'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PreguntaSchema = Schema({
  sesionDF: String,
  preguntas: Array
})

module.exports = mongoose.model('Pregunta', PreguntaSchema)
