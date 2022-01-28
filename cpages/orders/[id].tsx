import type { NextPage } from 'next'
import { Layout, Breadcrumb, Typography, Descriptions, Table, Tag, Space } from 'antd';

const OrderDetail: NextPage = () => {
  const columns = [
    {
      title: 'Product  Name',
      dataIndex: 'productName',
      key: 'productName',
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

  const data = [
    {
      key: '1',
      productName: 'XBox1',
      variant: 'Regular black',
      quantity: 1,
      price: 20000,
    },
  ];
  return (
    <Layout>
      <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <div className="mb-8">
            <Typography.Title>Order Overview</Typography.Title>
            <Typography.Text> Order created: 08/09/2021, 19:00</Typography.Text>
          </div>

          <Descriptions title="Customer Details" column={1}>
            <Descriptions.Item label="Name">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Email Address">email@email.com</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>

          <Table columns={columns} dataSource={data} />
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Xendit ©2022</Layout.Footer>
    </Layout>
  )
}

export default OrderDetail
