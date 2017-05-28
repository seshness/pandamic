import undoable, { distinctState } from 'redux-undo'

import { DRAW_CITY, SHUFFLE_DISCARD_PILE } from '../actions/action-types';

import allCities from '../all-cities';

const manageDeck = (previousState, action) => {
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
    case SHUFFLE_DISCARD_PILE:
      return {
        infectionDiscardPile: [],
        topOfDeck: [previousState.infectionDiscardPile].concat(previousState.topOfDeck)
      }
    default:
      return previousState;
  }
};

const undoableManageDeck = undoable(manageDeck, {
  filter: distinctState()
});

export default undoableManageDeck;
