import React from 'react';
import { connect } from 'react-redux';

import { DRAW_CITY } from '../actions/action-types';

import CityListSegment from '../components/city-list-segment';

const mapStateToProps = (state) => {
  const topOfDeckCities = {
    title: 'Top of Deck',
    cities: state.topOfDeck[0]
  };
  const discardedCities = {
    title: 'Discard pile',
    cities: state.infectionDiscardPile,
    disabled: true
  };
  const otherCities = {
    title: 'Inconsequential',
    cities: Array.prototype.concat.apply([], state.topOfDeck.slice(1)) // flatten
  };
  return {
    segments: [
      topOfDeckCities,
      discardedCities,
      otherCities
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
        segments.map((segment) => <CityListSegment {...segment} onCityClick={onCityClick} />)
      }
    </div>
  );
}

const CityList = connect(mapStateToProps, mapDispatchToProps)(SegmentedCityList)

export default CityList;
