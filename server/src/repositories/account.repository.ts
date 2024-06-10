import { AppDataSource } from "../database/data-source";
import { Account } from "../entities/account.entity";

export const AccountRepository = AppDataSource.getRepository(Account);