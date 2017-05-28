import React from 'react';

import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { List } from 'material-ui/List';

import CityItem from './city-item';

const CityListSegment = ({ title, cityGroups, ...otherProps }) => {
  if (cityGroups.length === 0) {
    return null
  }
  const numCities = cityGroups.map(group => group.length).reduce((a, b) => a + b);
  const citiesAndDividers = Array.prototype.concat.apply([],
    cityGroups.map((group, idx) => (
      group.map(city => (
        <CityItem key={city} cityName={city} {...otherProps} />
      )).concat(
        group.length > 0 && <Divider key={idx} />
      )
    ))
  );

  return (
    <List key={title}>
      {
        numCities > 0 &&
          <Subheader inset={true}>{`${title} (${numCities})`}</Subheader>
      }
      { citiesAndDividers }
    </List>
  );
};

export default CityListSegment;
