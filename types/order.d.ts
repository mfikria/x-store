import { Product } from './product';
import { User } from './user';
import { Logistic } from './logistic';

export enum OrderStatus {
  CANCELLED,
  EXPIRED,
  PROCESSING,
  RETURNED,
  PAID
}

export enum PaymentMethod {
  CREDIT_CARD,
  VIRTUAL_ACCOUNT,
  ONLINE_TO_OFFLINE,
  E_MONEY,
  DIRECT_DEBIT,
  PAYLATER,
}

export interface Order {
  status: OrderStatus
  dueDate: string
  paymentMethod: PaymentMethod
  paymentProvider: string
  products: Product[]
  customer: User
  deliveryFee: number
  discount: number
  totalAmount: number
  logistic: Logistic
}
