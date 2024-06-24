import { Repository } from 'typeorm';
import { AppDataSource } from '../database/data-source';
import { Profile } from '../entities/profile.entity';
import { ProfileRepository } from '../repositories/profile.repository';
import { UpdateProfileDTO } from '../dtos/profile/verify-profile.dto';
import { CreateCreditCardDTO } from '../dtos/credit-card/create-credit-card.dto';
import { CreditCard } from '../entities/credit-card.entity';
import { CreditCardRepository } from '../repositories/credit-card.repository';

export class ProfileService {

    private profileRepository: Repository<Profile>;
    private creditCardRepository: Repository<CreditCard>;

    constructor() {
        this.profileRepository = AppDataSource.getRepository(Profile);
        this.creditCardRepository = AppDataSource.getRepository(CreditCard);
    }
    
    async getAllProfiles(): Promise<Profile[]> {
        try {
            return await ProfileRepository.find();
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getProfile(id: string): Promise<Profile | null> {
        try {
            return await ProfileRepository.findOne(
                { 
                    where: {id: id}, 
                    relations: {
                        profileCreditCards: true
                    }
                }
            );
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateProfile(id: string, updateProfileDto: UpdateProfileDTO): Promise<Profile | null> {
        const dni = updateProfileDto.dni;
        try {
            if(dni){
                throw new Error('DNI is associated with other account');
            }
            await this.profileRepository.update(id, updateProfileDto);
            return await this.getProfile(id);
        } catch (error: any) {
            throw new Error(error.message);
        }
        
    }

    async getCreditCard(id: string): Promise<CreditCard | null> {
        try {
            return await CreditCardRepository.findOneBy({ id });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async addCreditCard(id: string, createCreditCardDto: CreateCreditCardDTO): Promise <CreditCard | null> {
        try {
            const newCreditCard = await this.creditCardRepository.create(
                {
                    profile: await this.getProfile(id),
                    ...createCreditCardDto
                }
            )
            await this.creditCardRepository.save(newCreditCard);
            return newCreditCard;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async deleteCreditCard(id: string): Promise <CreditCard | null> {
        try {
            await this.creditCardRepository.update({id},{is_active: false});
            return await this.getCreditCard(id);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}