import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage'
import reduxReset from 'redux-reset'

import rootReducer from './reducers';

const enhancedCreateStore = compose(
  persistState(['deck'], {
    key: 'pandamic-deck'
  }),
  reduxReset()  // Will use 'RESET' as default action.type to trigger reset
)(createStore);
const store = enhancedCreateStore(rootReducer);

export default store;
