import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import zIndex from 'material-ui/styles/zIndex';
import { green800 } from 'material-ui/styles/colors';

import Epidemic from '../icons/epidemic';

const EpidemicFAB = () => (
  <div style={{
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: zIndex.appBar
  }}>
    <FloatingActionButton backgroundColor={green800}>
      <Epidemic />
    </FloatingActionButton>
  </div>
);

export default EpidemicFAB;
