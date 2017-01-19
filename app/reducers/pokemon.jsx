import axios from 'axios'

const defaultState = {
  allPokemon: [],
  selectedPokemon: {},
}

const reducer = (state=defaultState, action) => {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      newState.allPokemon = action.pokemon
      return newState

    case RECEIVE_ONE_POKEMON:
      newState.selectedPokemon= action.p
      return newState
    }
  return state
}

const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON', RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON' 

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON, pokemon
})

export const receiveOnePokemon = p => ({
  type: RECEIVE_ONE_POKEMON, p
})

export const getOnePokemon = p =>
  dispatch =>
    axios.get(`/api/pokemon/${p.id}`)
      .then(response => {
        const p = response.data
        dispatch(receiveOnePokemon(p))
      })

export const getAllPokemon = () =>
  dispatch =>
    axios.get('/api/pokemon/')
      .then(response => {
        const pokes = response.data
        dispatch(receiveAllPokemon(pokes))
      })
      // .catch(failed => dispatch(authenticated(null)))

export default reducer