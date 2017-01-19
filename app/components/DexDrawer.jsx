import React, { Component } from 'react'
import { Drawer, AppBar, MenuItem} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Router } from 'react-router'
import PokeIcon from './PokeIcon'

export default class DexDrawer extends Component  {

  constructor(props){
    super(props);
    this.state = {open:false};
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }


  handleToggle = () => this.setState({open: !this.state.open});


  handleClose = () => this.setState({open: false});
  
  render() {
      return (
          <div>
            <Drawer
              docked={false}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
              >
              <AppBar title="Menu" 
              iconElementLeft={<PokeIcon />}/>

              <MenuItem onTouchTap={this.handleClose}>All Pokémon
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>My Teams
              </MenuItem>              
              <MenuItem onTouchTap={this.handleClose}>Favorites
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>About
              </MenuItem>
            </Drawer>
            <AppBar style={{position: 'fixed'}} title="Pwakédex: A Progressive Web App Pokédex"
            onLeftIconButtonTouchTap={this.handleToggle}/>
          </div>
      );
  }
}

DexDrawer.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
