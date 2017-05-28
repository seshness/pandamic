import React from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List } from 'material-ui/List';

import CityItem from './city-item';

const CityListSegment = ({ title, cities, ...otherProps }) => {
  if (cities.length === 0) {
    return null
  }
  return (
    <List key={title}>
      {
        cities.length > 0 &&
          <Subheader inset={true}>{title + ` (${cities.length})`}</Subheader>
      }
      {
        cities.map(city => <CityItem key={city} cityName={city} {...otherProps} />)
      }
    </List>
  );
};

export default CityListSegment;
