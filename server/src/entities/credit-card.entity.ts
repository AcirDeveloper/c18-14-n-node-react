import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm"
import { Profile } from "./profile.entity";


@Entity({ name: "credit_cards" })
@Unique(['target_number', 'profile'])
export class CreditCard {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    owner_full_name: string;

    @Column({nullable: false})
    target_number: string;

    @Column({type: 'date', nullable: false})
    due_date: Date;

    @Column({nullable: false})
    cvv_code: string

    @ManyToOne(() => Profile, profile => profile.profileCreditCards)
    profile: Profile;

    @Column({default: true})
    is_active: boolean;

}
