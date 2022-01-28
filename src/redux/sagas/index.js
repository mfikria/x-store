import { all } from 'redux-saga/effects';
import orderSagas from './order/index';

export default function* rootSagas() {
  yield all([
    ...orderSagas,
  ]);
}
