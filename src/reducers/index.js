import { DRAW_CITY } from '../actions/action-types';

import allCities from '../all-cities';

const rootReducer = function(previousState, action) {
  if (previousState == null) {
    previousState = {
      infectionDiscardPile: [],
      topOfDeck: [Object.keys(allCities).sort()]
    };
  }

  switch (action.type) {
    case DRAW_CITY:
      const drawnCity = action.city;
      const newTopOfDeck = [previousState.topOfDeck[0].filter(function(city) {
        return city !== drawnCity;
      })].concat(previousState.topOfDeck.slice(1));
      return {
        ...previousState,
        infectionDiscardPile: previousState.infectionDiscardPile.concat(drawnCity),
        topOfDeck: newTopOfDeck
      }
    default:
      return previousState;
  }
}

export default rootReducer;
