import {
  FETCH_ORDER,
  FETCH_ORDER_FAIL,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_LIST,
  FETCH_ORDER_LIST_FAIL,
  FETCH_ORDER_LIST_SUCCESS
} from '@/constants/ActionTypes'

export function fetchOrder(payload) {
  return {
    type: FETCH_ORDER,
    payload
  };
}

export function fetchOrderSuccess(payload) {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload
  };
}

export function fetchOrderFail() {
  return {
    type: FETCH_ORDER_FAIL,
  };
}

export function fetchOrderList() {
  return {
    type: FETCH_ORDER_LIST
  };
}

export function fetchOrderListSuccess(payload) {
  return {
    type: FETCH_ORDER_LIST_SUCCESS,
    payload
  };
}

export function fetchOrderListFail() {
  return {
    type: FETCH_ORDER_LIST_FAIL,
  };
}
