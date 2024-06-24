import { Entity, Column, CreateDateColumn, UpdateDateColumn, Unique, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { User } from "./user.entity"
import { PaymentOrder } from "./payment-order.entity"

export enum LoanApplicationStatus {
    PENDING= 'En Espera',
    APPROVED = 'Aprobado',
    REJECTED= 'Rechazado'
}

@Entity({ name: "loan_applications" })
export class LoanApplication {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable: false})
    loan_purpose: string

    @Column({nullable: false})
    loan_purpose_detail: string

    @Column({nullable: false})
    capital: number

    @Column({nullable: false})
    loan_installments: number

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    interest_rate: number

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    capital_with_interest: number;

    @CreateDateColumn()
    application_date?: Date;

    @Column({nullable: true, type: 'timestamp'})
    approvement_application_date?: Date;

    @Column({
        type: "enum",
        enum: LoanApplicationStatus,
        default: LoanApplicationStatus.PENDING,
    })
    status: LoanApplicationStatus;

    @ManyToOne(() => User, user => user.applicantLoanApplications)
    applicant: User;

    @ManyToOne(() => User, user => user.investorLoanApplications)
    investor: User;

    @OneToMany(() => PaymentOrder, paymentOrder => paymentOrder.loanApplication)
    paymentOrders: PaymentOrder[];

}
