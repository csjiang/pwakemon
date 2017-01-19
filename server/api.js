'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/pokemon', require('./pokemon'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())