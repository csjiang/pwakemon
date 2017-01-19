
const allPokesData = require('./allPokesData');
allPokesData.slice(0, 10).forEach(pokemon => 

  require('request')(pokemon.imageURL).pipe(require('fs').createWriteStream(`pokeImages/${pokemon.name}.png`))
)