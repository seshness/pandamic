import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

import { RESET } from '../actions/action-types';
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
    },
    reset: {
      onTouchTap: () => {
        dispatch({
          type: RESET
        })
      }
    }
  };
};

const merge = (stateProps, dispatchProps, ownProps) => (
  {
    undo: { ...stateProps.undo, ...dispatchProps.undo },
    redo: { ...stateProps.redo, ...dispatchProps.redo },
    reset: { ...stateProps.reset, ...dispatchProps.reset },
    ...ownProps
  }
);

const HeaderBarContainer = connect(
  mapStateToProps, mapDispatchToProps, merge, { pure: true }
)(HeaderBar);

export default HeaderBarContainer;
