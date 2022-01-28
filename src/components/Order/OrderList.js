import { Descriptions, Layout, Table, Typography, Tag, Tabs, Breadcrumb } from 'antd'
import { useSelector } from 'react-redux';
import moment from 'moment'

const columns = [{
  title: 'Date',
  dataIndex: 'dueDate',
  key: 'dueDate',
  render: (date) => moment(date).format('DD MMM YYYY')
}, {
  title: 'Order Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'Customer',
  dataIndex: 'customer',
  key: 'customer',
  render: (customer) => customer.name.firstname
}, {
  title: 'Total  Price',
  dataIndex: 'totalAmount',
  key: 'totalAmount',
  render: (totalAmount) => `Rp${totalAmount}`
}, {
  title: 'Payment Status',
  dataIndex: 'status',
  key: 'status',
  render: (status) => <Tag color="green">{status}</Tag>
}, {
  title: 'Payment Method',
  dataIndex: 'paymentMethod',
  key: 'paymentMethod',
  render: (status) => <Tag color="green">{status}</Tag>
}];

const OrderList = () => {
  const list = useSelector(state => state.order.list);

  return (
    <Layout>
      <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ padding: 24, minHeight: 380 }}>
          <div className="mb-8">
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Orders</Breadcrumb.Item>
              <Breadcrumb.Item>Active Orders</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Active Orders" key="1">
              <Table
                rowKey={record => record.id}
                style={{ minWidth: '600px' }}
                dataSource={list}
                columns={columns}
                bordered
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Completed" disabled key="2">
              Tab 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Cancelled" disabled key="3">
              Tab 3
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Xendit ©2022</Layout.Footer>
    </Layout>
  );
};

export default OrderList;
