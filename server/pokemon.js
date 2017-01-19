'use strict'

const db = require('APP/db')
const Pokemon = db.models.pokemon

module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		Pokemon.findAll({
			order: [['order', 'ASC']]
		})
		.then(pokemon => res.status(200).json(pokemon))
		.catch(next))
	.get('/:id', (req, res, next) => 
		Pokemon.findById(req.params.id)
		.then(p => res.status(200).json(p))
		.catch(next))