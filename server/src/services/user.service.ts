import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto';
import { encrypt } from '../helpers/encrypt';
import { In, Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { AppDataSource } from '../database/data-source';
import { Profile } from '../entities/profile.entity';

export class UserService {

    private userRepository: Repository<User>;
    private roleRepository: Repository<Role>;
    private profileRepository: Repository<Profile>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
        this.roleRepository = AppDataSource.getRepository(Role);
        this.profileRepository = AppDataSource.getRepository(Profile);
    }
    
    async getAllUsers(): Promise<User[]> {
        try {
            return await UserRepository.find();
        } catch (error: any) {
            throw new Error(error.message);
        }
        
    }

    async getUserById(id: string): Promise<User | null> {
        try {
            return await UserRepository.findOne({ 
                where: {
                    id: id
                },
                relations: {
                    profile: true
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
        
    }
    
    async createUser(createUserDto: CreateUserDTO): Promise<User> {
        try {
            const { username, email, password, roles } = createUserDto;
            const newProfile = this.profileRepository.create(); 
            const hashedPassword = await encrypt.encryptPassword(password);
            const newUser = this.userRepository.create({
                username: username,
                email: email,
                password: hashedPassword
            });

            if (roles && roles.length > 0) {
                newUser.roles = await this.roleRepository.find({ where: { name: In(roles) } });
            }
            const savedProfile = await this.profileRepository.save(newProfile);
            newUser.profile = savedProfile;
            await this.userRepository.save(newUser);

            return newUser;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateUser(id: string, updateUserDto: UpdateUserDTO): Promise<User | null> {
        const { roles, ...userUpdate } = updateUserDto;
        
        try {
            await this.userRepository.update(id, userUpdate);

            const user = await this.userRepository.findOne({ where: { id }, relations: ['roles'] });

            if (!user) {
                return null;
            }

            const newRoles = await this.roleRepository.find({ where: { name: In(roles) } });

            user.roles = newRoles;
            await this.userRepository.save(user);

            return user;
        } catch (error: any) {
            throw new Error(error.message);
        }
        
    }
    
    async deleteUser(id: string): Promise<User | null> {
        try {
            await UserRepository.update(id, {is_cancelled: true});
            return await this.getUserById(id); 
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}