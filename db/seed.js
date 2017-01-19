const db = require('APP/db')
const allPokemon = require('./pokeData')
const types = [ 'Normal',
	  'Fighting',
	  'Flying',
	  'Poison',
	  'Ground',
	  'Rock',
	  'Bug',
	  'Ghost',
	  'Steel',
	  'Fire',
	  'Water',
	  'Grass',
	  'Electric',
	  'Psychic',
	  'Ice',
	  'Dragon',
	  'Dark',
	  'Fairy',
	  'Unknown',
	  'Shadow' ]

const seedTypes = () => db.Promise.map(types, type => db.model('type').create(type))

const seedPokemon = () => db.Promise.map(allPokemon, pokemon => db.model('pokemon').create(pokemon))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedTypes)
  .then(types => console.log(`Seeded ${types.length} types OK`))
  .then(seedPokemon)
  .then(pokemon => console.log(`Seeded ${pokemon.length} pokemon OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())

