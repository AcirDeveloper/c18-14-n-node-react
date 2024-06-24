import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm"
import { User } from "./user.entity"
import { CreditCard } from "./credit-card.entity"

@Entity({ name: "profiles" })
export class Profile {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable: true})
    name?: string

    @Column({nullable: true})
    last_name?: string

    @Column({nullable: true})
    dni?: string

    @Column({nullable: true})
    phone?: string;

    @Column({nullable: true})
    date_of_birth?: Date

    @Column({nullable: true})
    avatar?: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => User, user => user.profile)
    @JoinColumn()
    user: User;

    @OneToMany(() => CreditCard, creditCard => creditCard.profile)
    profileCreditCards: CreditCard[];
}