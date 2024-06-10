import { AppDataSource } from '../database/data-source';
import { CreditCard } from '../entities/credit-card.entity';

export const CreditCardRepository = AppDataSource.getRepository(CreditCard);