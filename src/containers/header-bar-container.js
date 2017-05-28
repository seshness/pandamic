import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

import HeaderBar from '../components/header-bar';

const mapStateToProps = (state) => {
  return {
    undo: {
      disabled: state.deck.past.length === 0
    },
    redo: {
      disabled: state.deck.future.length === 0
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    undo: {
      onTouchTap: () => {
        dispatch(UndoActionCreators.undo());
      }
    },
    redo: {
      onTouchTap: () => {
        dispatch(UndoActionCreators.redo());
      }
    }
  };
};

const merge = (stateProps, dispatchProps, ownProps) => (
  Object.assign({
    undo: Object.assign({}, stateProps.undo, dispatchProps.undo),
    redo: Object.assign({}, stateProps.redo, dispatchProps.redo)
  }, ownProps)
);

const HeaderBarContainer = connect(
  mapStateToProps, mapDispatchToProps, merge, { pure: true }
)(HeaderBar);

export default HeaderBarContainer;
