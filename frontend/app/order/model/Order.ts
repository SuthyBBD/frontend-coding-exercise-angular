import {Price} from '../../shared/model/Price';
import {PaymentType} from '../../shared/model/PaymentType';
import {ServingStyle} from '../../shared/model/ServingStyle';
import {Packaging} from '../../shared/model/Packaging';
import {LocationCoordinates} from '../../shared/model/LocationCoordinates';

export interface Order {
  id: number;
  lastModified: string;
  customer: string;
  vendor: string;
  commissionRate: number;
  requestedDeliveryDate: string;
  price: Price;
  paymentType: PaymentType;
  headcount: number;
  servingStyle: ServingStyle;
  deliveredAt: string;
  delayMinutes: number;
  lateReason: string;
  packaging: Packaging;
  driverName: string;
  deliveryLocation: LocationCoordinates;
  currentLocation: LocationCoordinates;
  vendorLocation: LocationCoordinates;
}
