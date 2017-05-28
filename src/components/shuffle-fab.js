import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import zIndex from 'material-ui/styles/zIndex';

import AvShuffle from 'material-ui/svg-icons/av/shuffle';

const ShuffleFAB = (props) => (
  <div style={{
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: zIndex.appBar
  }}>
    <FloatingActionButton {...props}>
      <AvShuffle />
    </FloatingActionButton>
  </div>
);

export default ShuffleFAB;
