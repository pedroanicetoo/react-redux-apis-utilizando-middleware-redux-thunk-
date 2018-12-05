import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './common/header'
import Home from './home'
import CreateList from './createList';
//redux
import { Provider } from 'react-redux';
import store from './store';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
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
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/lista' component={CreateList}/>
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
