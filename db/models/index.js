'use strict';

const Pokemon = require('./pokemon')
const Type = require('./Type')

Pokemon.belongsToMany(Type, { through: 'pokemontype' })
Type.belongsToMany(Pokemon, { through: 'pokemontype' })

module.exports = {Pokemon}
