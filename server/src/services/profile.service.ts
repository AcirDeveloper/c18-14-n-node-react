import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { In, Repository } from 'typeorm';
import { AppDataSource } from '../database/data-source';
import { Profile } from '../entities/profile.entity';
import { ProfileRepository } from '../repositories/profile.repository';
import { UpdateProfileDTO } from '../dtos/profile/verify-profile.dto';

export class UserService {

    private userRepository: Repository<User>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
        this.profileRepository = AppDataSource.getRepository(Profile);
    }
    
    async getAllProfiles(): Promise<Profile[]> {
        return await ProfileRepository.find();
    }

    async getProfile(id: string): Promise<Profile | null> {
        return await ProfileRepository.findOneBy({ id });
    }
    
    async createUser(createProfileDto: CreateProfileDTO): Promise<Profile> {
        const { username, email, password, roles } = createUserDto;
        return await ProfileRepository.save(user);
    }

    async updateProfile(id: string, updateProfileDto: UpdateProfileDTO): Promise<Profile | null> {
        await this.profileRepository.update(id, updateProfileDto);

        const user = await this.userRepository.findOne({ 
            where: { 
                profile_id: id 
            }
        });
        return await this.getProfile(id);
    }
}