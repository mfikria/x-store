const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109950,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    variant: 'men\'s clothing',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    variant: 'men\'s clothing',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
  }
]

const customer = {
  address: {
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874'
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  name: {
    firstname: 'john',
    lastname: 'doe'
  },
  phone: '1-570-236-7033'
}

const logistic = {
  deliveryStatus: 'DELIVERED',
  recipientAddress: {
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874'
  },
  deliveryProvider: 'JNE',
  weight: 1,
  notes: '-'
}

module.exports = () => ({
  customers: [customer],
  products,
  orders: [
    {
      id: 1,
      status: 'PAID',
      dueDate: '2022-01-28T07:09:58.055Z',
      paymentMethod: 'CREDIT_CARD',
      paymentProvider: 'BCA',
      products,
      customer,
      deliveryFee: 20000,
      discount: 10000,
      totalAmount: 50000,
      logistic
    }
  ]
})
