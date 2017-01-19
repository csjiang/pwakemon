'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Type = db.define('type', {
  name: Sequelize.STRING,  
})

module.exports = Type