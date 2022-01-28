import { HYDRATE } from 'next-redux-wrapper';
import {
  FETCH_ORDER,
  FETCH_ORDER_FAIL,
  FETCH_ORDER_SUCCESS
} from '@/constants/ActionTypes';

const initialState = {};

const detail = (state = initialState, { type, payload }) => {
  if (type === HYDRATE) {
    return {...payload.order.detail};
  }
  switch (type) {
    case FETCH_ORDER:
    case FETCH_ORDER_FAIL:
      return initialState;
    case FETCH_ORDER_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export default detail;
