import { Table } from 'antd';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const columns = [{
  title: 'Ordername',
  dataIndex: 'ordername',
  key: 'ordername',
  render: (text) => (
    <Link href={`/order/[ordername]`} as={`/order/${text}`}>
      <a>{text}</a>
    </Link>
  )
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
}];

const OrderList = () => {
  const list = useSelector(state => state.order.list);

  return (
    <Table
      rowKey={record => record.id}
      style={{ minWidth: '600px' }}
      dataSource={list}
      columns={columns}
      bordered
    />
  );
};

export default OrderList;
