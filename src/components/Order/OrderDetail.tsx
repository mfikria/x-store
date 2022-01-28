import type { NextPage } from 'next'
import { Layout, Breadcrumb, Typography, Descriptions, Table, Tag, Space } from 'antd';
import { useSelector } from 'react-redux';

const OrderDetail: NextPage = () => {
  const order = useSelector(state => state.order.detail);

  const columns = [
    {
      title: 'Product  Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Variant',
      dataIndex: 'variant',
      key: 'variant',
    },
    {
      title: 'QTY',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
    },
  ];

  const dataSource = order?.products?.map(({ quantity, product }) => ({ quantity, ...product })).concat([
    { quantity: 'Subtotal', price: 'Rp 900.000' },
    { quantity: 'Delivery Fee', price: 'Rp 100.000' },
    { quantity: 'Discount', price: '-Rp 100.000' },
    { quantity: 'Total Amount Due', price: 'Rp 900.000' },
  ]) || []

  return (
    <Layout>
      <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <div className="mb-8">
            <Typography.Title data-testid="title">Order Overview</Typography.Title>
            <Typography.Text> Order created: 08/09/2021, 19:00</Typography.Text>
          </div>

          <Descriptions title="Customer Details" column={1}>
            <Descriptions.Item label="Name">{order?.customer?.name?.firstname}</Descriptions.Item>
            <Descriptions.Item label="Telephone">{order?.customer?.phone}</Descriptions.Item>
            <Descriptions.Item label="Email Address">{order?.customer?.email}</Descriptions.Item>
            <Descriptions.Item label="Address">
              {order?.customer?.address?.street}, {order?.customer?.address?.number}, {order?.customer?.address?.city}, {order?.customer?.address?.zipcode}
            </Descriptions.Item>
          </Descriptions>

          <Typography.Title level={5} className="mt-8">Product Information</Typography.Title>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />

          <Descriptions className="mt-8" title="Logistic Details" column={1}>
            <Descriptions.Item label="Delivery Status">{order?.logistic?.deliveryStatus}</Descriptions.Item>
            <Descriptions.Item label="Recipient's Address">
              {order?.logistic?.recipientAddress?.street}, {order?.logistic?.recipientAddress?.number}, {order?.logistic?.recipientAddress?.city}, {order?.logistic?.recipientAddress?.zipcode}
            </Descriptions.Item>
            <Descriptions.Item label="Delivery Provider">{order?.logistic?.deliveryProvider}</Descriptions.Item>
            <Descriptions.Item label="Weight">{order?.logistic?.weight}</Descriptions.Item>
            <Descriptions.Item label="Notes">{order?.logistic?.notes}</Descriptions.Item>
          </Descriptions>
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Xendit ©2022</Layout.Footer>
    </Layout>
  )
}

export default OrderDetail
