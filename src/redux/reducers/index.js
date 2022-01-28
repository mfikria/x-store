import { combineReducers } from 'redux';
import order from './order';

const _reducers = combineReducers({
  order,
});

function reducers(state, action) {
  return _reducers(state, action);
}

export default reducers;
