import { PaymentOrder } from '../entities/payment-order.entity';
import { Account } from '../entities/account.entity';
import { Transaction, TransactionType } from '../entities/transaction.entity';
import { User } from '../entities/user.entity';
import { AppDataSource } from '../database/data-source';
import { MakePaymentDTO, RechargeAccountDTO, WithdrawFromAccountDTO } from '../dtos/transaction/transaction.dto';
import { DataSource, Repository } from 'typeorm';
import { TransactionRepository } from '../repositories/transaction.repository';

export class TransactionService {
    private dataSource: DataSource;
    private transactionRepository: Repository<Transaction>;

    constructor() {
        this.dataSource = AppDataSource;
        this.transactionRepository = AppDataSource.getRepository(Transaction);
    }

    async getTransactions(userLogged: User): Promise<Transaction[]> {
        try {
            return await TransactionRepository.find(
                {
                    relations: {
                        user: true,
                        account: true
                    }
                }
                /*{
                    where: {
                        user: userLogged
                    },
                    relations: {
                        user: true, 
                        account: true
                    }
                }*/
            );
        } catch (error: any) {
            throw new Error(error.message);
        }   
    }


    async makePayment(makePaymentDto: MakePaymentDTO): Promise<void> {

        const {orderId, userId, amount} = makePaymentDto;

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();

        await queryRunner.startTransaction();
        try {
            const paymentOrderRepository = queryRunner.manager.getRepository(PaymentOrder);
            const accountRepository = queryRunner.manager.getRepository(Account);
            const transactionRepository = queryRunner.manager.getRepository(Transaction);
            const userRepository = queryRunner.manager.getRepository(User);

            const user = await userRepository.findOneBy({ id: userId });
            if (!user) {
                throw new Error('User not found');
            }

            const paymentOrder = await paymentOrderRepository.findOne({ where: { id: orderId }, relations: ['user'] });
            if (!paymentOrder) {
                throw new Error('Payment order not found');
            }

            const account = await accountRepository.findOne({ where: { user: { id: userId } } });
            if (!account) {
                throw new Error('Account not found');
            }

            // Deduce amount from account balance
            account.balance = parseFloat(account.balance.toString()) - amount;
            if (account.balance < 0) {
                throw new Error('Insufficient balance');
            }

            paymentOrder.payment_date = new Date();

            // Create a transaction record
            const transaction = new Transaction();
            transaction.user = user;
            transaction.account = account;
            transaction.type = TransactionType.PAYMENT;
            transaction.amount = amount;
            transaction.date = new Date();

            await queryRunner.manager.save(account);
            await queryRunner.manager.save(paymentOrder);
            await queryRunner.manager.save(transaction);

            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async rechargeAccount(rechargeAccountDto: RechargeAccountDTO): Promise<void> {
        const {accountId, userId, amount} = rechargeAccountDto;
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
    
        await queryRunner.startTransaction();
        try {
            const accountRepository = queryRunner.manager.getRepository(Account);
            const userRepository = queryRunner.manager.getRepository(User);
            const transactionRepository = queryRunner.manager.getRepository(Transaction);
        
            const user = await userRepository.findOneBy({ id: userId });
            if (!user) {
                throw new Error('User not found');
            }
        
            const account = await accountRepository.findOneBy({ id: accountId });
            if (!account) {
                throw new Error('Account not found');
            }
            // Add amount to account balance
            account.balance = parseFloat(account.balance.toString()) + amount;
            // Create a transaction record
            const transaction = new Transaction();
            transaction.user = user;
            transaction.account = account;
            transaction.type = TransactionType.RECHARGE;
            transaction.amount = amount;
            transaction.date = new Date();
        
            await queryRunner.manager.save(account);
            await queryRunner.manager.save(transaction);
        
            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async withdrawFromAccount(withdrawFromAccountDto: WithdrawFromAccountDTO): Promise<void> {
        const {accountId, userId, amount} = withdrawFromAccountDto;
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
    
        await queryRunner.startTransaction();
        try {
            const accountRepository = queryRunner.manager.getRepository(Account);
            const userRepository = queryRunner.manager.getRepository(User);
            const transactionRepository = queryRunner.manager.getRepository(Transaction);
        
            const user = await userRepository.findOneBy({ id: userId });
            if (!user) {
                throw new Error('User not found');
            }
        
            const account = await accountRepository.findOneBy({ id: accountId });
            if (!account) {
                throw new Error('Account not found');
            }
        
            // Deduce amount from account balance
            account.balance = parseFloat(account.balance.toString()) - amount;
            if (account.balance < 0) {
                throw new Error('Insufficient balance');
            }
        
            // Create a transaction record
            const transaction = new Transaction();
            transaction.user = user;
            transaction.account = account;
            transaction.type = TransactionType.WITHDRAWAL;
            transaction.amount = amount;
            transaction.date = new Date();
        
            await queryRunner.manager.save(account);
            await queryRunner.manager.save(transaction);
        
            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }
}
