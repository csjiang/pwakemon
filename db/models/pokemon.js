'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')


const Pokemon = db.define('pokemon', {
  name: Sequelize.STRING,  
  description: Sequelize.TEXT,
  base_experience: Sequelize.INTEGER,
  height: Sequelize.INTEGER,
  is_default: Sequelize.BOOLEAN,
  order: Sequelize.INTEGER,
  weight: Sequelize.INTEGER,
  front_shiny_sprite_female: Sequelize.STRING,
  front_shiny_sprite_male: Sequelize.STRING,
  front_sprite_female: Sequelize.STRING
  //TODO: pivot tables for other attributes
})

// Pokemon.beforeCreate(function(p, options) {
//   return capitalize(p.name).then(function (capName) {
//     p.name = capName;
//   });
// })

module.exports = Pokemon