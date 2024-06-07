import { Repository } from 'typeorm';
import { AppDataSource } from '../database/data-source';
import { Profile } from '../entities/profile.entity';
import { ProfileRepository } from '../repositories/profile.repository';
import { UpdateProfileDTO } from '../dtos/profile/verify-profile.dto';

export class ProfileService {

    private profileRepository: Repository<Profile>;

    constructor() {
        this.profileRepository = AppDataSource.getRepository(Profile);
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
            return await ProfileRepository.findOneBy({ id });
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
}