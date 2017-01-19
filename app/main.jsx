'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import {getAllPokemon} from './reducers/pokemon'

import DexContainer from './containers/DexContainer'
import DexDrawer from './components/DexDrawer'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// import Login from './components/Login'
// import WhoAmI from './components/WhoAmI'

const NavWrapper = connect( 
  () => ({})) (
  (/*{ user, */ { children }) =>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}><div>
      <DexDrawer/>
      {children}
    </div></MuiThemeProvider>
)

const onPokemonEnter = () => (!store.getState().pokemon.length && store.dispatch(getAllPokemon()))

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={NavWrapper} >
        <IndexRedirect to="/pokemon" />
        <Route path="/pokemon" component={DexContainer} onEnter={onPokemonEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)