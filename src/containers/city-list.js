import React from 'react';
import { connect } from 'react-redux';

import { DRAW_CITY } from '../actions/action-types';

import CityListSegment from '../components/city-list-segment';

const mapStateToProps = (state) => {
  const topOfDeckCities = {
    title: 'Top of Deck',
    cityGroups: state.deck.present.topOfDeck
  };
  const discardedCities = {
    title: 'Discard pile',
    cityGroups: [state.deck.present.infectionDiscardPile],
    disabled: true
  };
  return {
    segments: [
      topOfDeckCities,
      discardedCities
    ]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCityClick: (cityName) => {
      dispatch({
        type: DRAW_CITY,
        city: cityName
      })
    }
  }
}

const SegmentedCityList = function({ segments, onCityClick }) {
  return (
    <div>
      {
        segments.map((segment) => (
          <CityListSegment
            key={segment.title}
            {...segment}
            onCityClick={onCityClick}
          />
        ))
      }
    </div>
  );
}

const CityList = connect(mapStateToProps, mapDispatchToProps)(SegmentedCityList)

export default CityList;
