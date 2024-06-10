import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { LoanApplication } from './loan-application.entity';

export enum PaymentOrderStatus {
    PENDING= 'Pendiente',
    PAID = 'Pagado',
    OVERDUE= 'Vencida'
}

@Entity({ name: "payment_orders" })
export class PaymentOrder {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal', { precision: 10, scale: 2})
    amount: number;

    @Column()
    payment_order_number: number;

    @Column({nullable: true, type: 'timestamp'})
    due_date: Date;

    @Column({
        type: "enum",
        enum: PaymentOrderStatus,
        default: PaymentOrderStatus.PENDING,
    })
    state: PaymentOrderStatus;

    @Column({nullable: true, type: 'date'})
    payment_date: Date | null;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => LoanApplication, loanApplication => loanApplication.paymentOrders)
    loanApplication: LoanApplication;
}