import { END } from 'redux-saga';
import { wrapper } from '@/redux/store';
import OrderList from '@/components/Order/OrderList';
import { fetchOrderList } from '@/redux/actions/order';

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res }) => {
    store.dispatch(fetchOrderList());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default OrderList;

