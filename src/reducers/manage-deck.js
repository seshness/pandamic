import undoable, { distinctState } from 'redux-undo'

import { DRAW_CITY, RESET, SHUFFLE_DISCARD_PILE } from '../actions/action-types';

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
      const newTopOfDeck = previousState.topOfDeck.map(function(hand) {
        return hand.filter(city => city !== drawnCity);
      });
      return {
        ...previousState,
        infectionDiscardPile: previousState.infectionDiscardPile.concat(drawnCity),
        topOfDeck: newTopOfDeck
      };
    case SHUFFLE_DISCARD_PILE:
      return {
        infectionDiscardPile: [],
        topOfDeck: [previousState.infectionDiscardPile.slice().sort()].concat(previousState.topOfDeck)
      };
    case RESET:
      return {
        infectionDiscardPile: [],
        topOfDeck: [Object.keys(allCities).sort()]
      };
    default:
      return previousState;
  }
};

const undoableManageDeck = undoable(manageDeck, {
  filter: distinctState()
});

export default undoableManageDeck;
