import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

@Entity({ name: "accounts" })
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, user => user.account)
    @JoinColumn()
    user: User;

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    balance: number;

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    profit: number;

    @OneToMany(() => Transaction, transaction => transaction.account)
    accountTransactions: Transaction[];

}
