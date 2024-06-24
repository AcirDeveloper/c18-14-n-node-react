import { Entity, Column, CreateDateColumn, UpdateDateColumn, Unique, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Role } from "./role.entity"
import { Profile } from "./profile.entity"
import { LoanApplication } from "./loan-application.entity"
import { Account } from "./account.entity"
import { Transaction } from "./transaction.entity"

@Entity({ name: "users" })
@Unique(['username', 'email'])
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable: false})
    username: string

    @Column({nullable: false})
    email: string

    @Column({nullable: false})
    password: string

    @Column({default: false})
    is_verified: boolean

    @Column({default: false})
    is_cancelled: boolean

    @Column({ nullable: true })
    resetPasswordToken?: string;

    @Column({ type: 'timestamp', nullable: true })
    resetPasswordExpires?: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Role, role => role.users)
    @JoinTable()
    roles: Role[];

    @OneToOne(() => Profile, profile => profile.user, { cascade: true })
    @JoinColumn()
    profile: Profile;

    @OneToOne(() => Account, account => account.user)
    @JoinColumn()
    account: Account;

    @OneToMany(() => LoanApplication, loanApplication => loanApplication.applicant)
    applicantLoanApplications: LoanApplication[];

    @OneToMany(() => LoanApplication, loanApplication => loanApplication.investor)
    investorLoanApplications: LoanApplication[];

    @OneToMany(() => Transaction, transaction => transaction.user)
    transactions: Transaction[];

}
