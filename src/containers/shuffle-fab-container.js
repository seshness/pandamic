import { connect } from 'react-redux';

import { SHUFFLE_DISCARD_PILE } from '../actions/action-types';
import ShuffleFAB from '../components/shuffle-fab';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    onTouchTap: function() {
      dispatch({ type: SHUFFLE_DISCARD_PILE })
    }
  }
};

const ShuffleFABContainer = connect(mapStateToProps, mapDispatchToProps)(ShuffleFAB)

export default ShuffleFABContainer;
