import { Address } from './user';

export enum DeliveryStatus {
  INFO_RECEIVED,
  IN_TRANSIT,
  OUT_OF_DELIVERY,
  ATTEMPT_FAIL,
  DELIVERED,
  EXPIRED,
  PENDING,
}

export enum DeliveryProvider {
  SI_CEPAT,
  JNE,
  JNT,
  POS,
  TIKI,
  WAHANA,
  ANTERAJA,
  GOSEND,
  GRAB_DELIVERY
}

export interface Logistic {
  deliveryStatus: DeliveryStatus
  recipientAddress: Address
  deliveryProvider: DeliveryProvider
  weight: number
  notes: string
}
