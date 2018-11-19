import React from 'react';
import AppBar from '@material-ui/core/AppBar'

const Header = (props) => (
    <AppBar position="static" color="primary">
    <div className='header'>
      <p className='title'>Lista de Compras</p>
    </div>
  </AppBar>
)

export default Header;