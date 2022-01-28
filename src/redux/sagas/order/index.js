import list from './list';
import detail from './detail';

const orderSagas = [
  ...detail,
  ...list,
];

export default orderSagas;
