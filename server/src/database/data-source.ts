import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { User } from "../entities/user.entity";
import { Role } from "../entities/role.entity";
import { Profile } from "../entities/profile.entity";
import { LoanApplication } from "../entities/loan-application.entity";
import { PaymentOrder } from "../entities/payment-order.entity";
import { LoanApplicationSubscriber } from "../suscribers/loanApplication.suscriber";
import { CreditCard } from "../entities/credit-card.entity";
import { Account } from "../entities/account.entity";
import { Transaction } from "../entities/transaction.entity";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: NODE_ENV === "dev" ? true : false,
  logging: NODE_ENV === "dev" ? false : false,
  entities: [User, Role, Profile, LoanApplication, PaymentOrder, CreditCard, Account, Transaction],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [LoanApplicationSubscriber],
});