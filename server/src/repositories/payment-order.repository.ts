import { AppDataSource } from '../database/data-source';
import { PaymentOrder } from '../entities/payment-order.entity';

export const PaymentOrderRepository = AppDataSource.getRepository(PaymentOrder);