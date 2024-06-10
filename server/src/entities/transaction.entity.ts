import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { Account } from './account.entity';

export enum TransactionType {
  PAYMENT = 'Pago',
  RECHARGE = 'Recarga',
  WITHDRAWAL = 'Retiro'
}

@Entity({ name: "transactions" })
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.transactions)
  user: User;

  @ManyToOne(() => Account, account => account.accountTransactions)
  account: Account;

  @Column({ type: 'enum', enum: TransactionType })
  type: TransactionType;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @CreateDateColumn()
  date?: Date;

}
