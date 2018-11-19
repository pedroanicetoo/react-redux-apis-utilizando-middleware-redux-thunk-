import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';

import './App.css';
import Header from './common/header'
import Home from './home'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63'
    },
    secondary: {
      main: '#00b0ff',
    },
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <Home />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
