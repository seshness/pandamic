import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderBar from './components/header-bar';
import CityList from './containers/city-list';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <HeaderBar />
            <CityList />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
