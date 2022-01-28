import { END } from 'redux-saga';
import { wrapper } from '@/redux/store';
import { fetchOrder } from '@/redux/actions/order';
import OrderDetail from '@/components/Order/OrderDetail';

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res, query }) => {
    store.dispatch(fetchOrder(Number.parseInt(query.id)));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default OrderDetail
