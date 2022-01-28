import { combineReducers } from 'redux';
import list from './list';
import detail from './detail';

const orderReducers = combineReducers({
  list,
  detail
});

export default orderReducers;
