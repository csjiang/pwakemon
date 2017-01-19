const db = require('APP/db')
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

const seedPokemon = () => 
	P.getPokemonsList({
		limit: 50,
		// offset: 172,
		})
		.then(allPokemon => allPokemon.results.map(p => p.name))
		.then(pokeNames => P.getPokemonByName(pokeNames))
		.then(allPokeInstances => db.Promise.map(allPokeInstances, p => {
			const sprites = p.sprites ? {front_shiny_sprite_female: p.sprites.front_shiny_female,
				front_shiny_sprite_male: p.sprites.front_shiny,
				front_sprite_female: p.sprites.front_female
			} : null

			return db.model('pokemon')
				.create(Object.assign({
					id: p.id,
					name: p.name,
					base_experience: p.base_experience,
					height: p.height,
					is_default: p.is_default,
					order: p.order,
					weight: p.weight,
					}, sprites))
				}))

db.didSync
  // .then(() => db.sync({force: true}))
  .then(seedPokemon)
  .then(pokemon => console.log(`Seeded ${pokemon.length} pokemon OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
