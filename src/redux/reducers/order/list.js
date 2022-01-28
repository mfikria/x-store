import { HYDRATE } from 'next-redux-wrapper';
import {
  FETCH_ORDER_LIST,
  FETCH_ORDER_LIST_FAIL,
  FETCH_ORDER_LIST_SUCCESS
} from '@/constants/ActionTypes';

const initialState = [];

const list = (state = initialState, { type, payload }) => {
  if (type === HYDRATE) {
    return [...payload.order.list];
  }
  switch (type) {
    case FETCH_ORDER_LIST:
    case FETCH_ORDER_LIST_FAIL:
      return initialState;
    case FETCH_ORDER_LIST_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export default list;
