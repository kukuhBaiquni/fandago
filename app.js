const express = require('express')
const logger = require('morgan')

const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use('/', require('./src/routes'))

module.exports = app
