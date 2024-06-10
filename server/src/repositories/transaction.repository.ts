import { AppDataSource } from "../database/data-source";
import { Transaction } from "../entities/transaction.entity";

export const TransactionRepository = AppDataSource.getRepository(Transaction);