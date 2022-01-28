import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_ORDER_LIST,
} from '@/constants/ActionTypes';
import { fetchOrderListFail, fetchOrderListSuccess } from '@/redux/actions/order';
import api from '@/constants/ApiUrlForBE';

/**
 * orderList saga
 */
export function* fetchOrderList() {
  while (true) {
    yield take(FETCH_ORDER_LIST);
    try {
      const res = yield fetch(`${api.url}/orders`);
      const data = yield res.json();
      yield put(fetchOrderListSuccess(data));
    } catch (e) {
      yield put(fetchOrderListFail());
    }
  }
}

export default [
  fork(fetchOrderList)
];




