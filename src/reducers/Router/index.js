import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  locationBeforeTransitions: null
});

export default (state = initialState, action) => {
  // Use this approach instead of switch case to avoid code complexity
  const cases = {
    [LOCATION_CHANGE]: () => state.merge({ locationBeforeTransitions: action.payload })
  }[action.type];

  return cases ? cases() : state;
};
