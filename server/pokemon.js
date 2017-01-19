'use strict'

const db = require('APP/db')
const Pokemon = db.models.pokemon

module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		Pokemon.findAll()
		.then(pokemon => res.json(pokemon))
		.catch(next))
	.get('/:id', (req, res, next) => 
		Pokemon.findById(req.params.id)
		.then(p => res.json(p))
		.catch(next))