import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_ORDER,
} from '@/constants/ActionTypes';
import { fetchOrderFail, fetchOrderSuccess } from '@/redux/actions/order';
import api from '@/constants/ApiUrlForBE';

/**
 * order saga
 */
export function* fetchOrder() {
  while (true) {
    yield take(FETCH_ORDER);
    try {
      const res = yield fetch(`${api.url}/orders/1`);
      const data = yield res.json();
      yield put(fetchOrderSuccess(data));
    } catch (e) {
      yield put(fetchOrderFail());
    }
  }
}

export default [
  fork(fetchOrder)
];




