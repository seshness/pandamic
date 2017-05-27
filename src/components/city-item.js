import React from 'react';

import {ListItem} from 'material-ui/List';

import LocationCity from 'material-ui/svg-icons/social/location-city';
import {red500, yellow700, blue500, grey800} from 'material-ui/styles/colors';

import allCities from '../all-cities';

function cityColourToMaterialColour(cityColour) {
  return {
    black: grey800,
    blue: blue500,
    red: red500,
    yellow: yellow700
  }[cityColour];
}

const CityItem = ({ cityName, onCityClick, ...otherProps }) => (
  <ListItem
    key={cityName}
    primaryText={cityName}
    onTouchTap={() => onCityClick(cityName)}
    leftIcon={
      <LocationCity
        color={cityColourToMaterialColour(allCities[cityName].colour)}
      />
    }
    {...otherProps}
  />
);

export default CityItem;
