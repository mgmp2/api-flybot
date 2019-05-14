'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const api = require('./routes')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/api', api)

module.exports = app
