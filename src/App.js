import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderBar from './components/header-bar';
import ShuffleFAB from './components/shuffle-fab';
import CityList from './containers/city-list';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import pandaTheme from './style/panda-theme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={pandaTheme}>
          <div>
            <HeaderBar />
            <ShuffleFAB />
            <CityList />
            <div>
              <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
