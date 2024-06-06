import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto';
import { encrypt } from '../helpers/encrypt';
import { In, Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { AppDataSource } from '../database/data-source';

export class UserService {

    private userRepository: Repository<User>;
    private roleRepository: Repository<Role>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
        this.roleRepository = AppDataSource.getRepository(Role);
    }
    
    async getAllUsers(): Promise<User[]> {
        return await UserRepository.find();
    }

    async getUserById(id: string): Promise<User | null> {
        return await UserRepository.findOne({ 
            where: {
                id: id
            },
            relations: {
                profile: true
            }
        });
    }
    
    async createUser(createUserDto: CreateUserDTO): Promise<User> {
        const { username, email, password, roles } = createUserDto;
        const hashedPassword = await encrypt.encryptPassword(password);
        const user = new User();
        user.email = email;
        user.username = username;
        user.password = hashedPassword;

        if (roles && roles.length > 0) {
            user.roles = await this.roleRepository.find({ where: { name: In(roles) } });
        }

        return await UserRepository.save(user);
    }

    async updateUser(id: string, updateUserDto: UpdateUserDTO): Promise<User | null> {
        const { roles, ...userUpdate } = updateUserDto;
        await this.userRepository.update(id, userUpdate);

        const user = await this.userRepository.findOne({ where: { id }, relations: ['roles'] });

        if (!user) {
            return null;
        }

        const newRoles = await this.roleRepository.find({ where: { name: In(roles) } });

        user.roles = newRoles;
        await this.userRepository.save(user);

        return user;
    }
    
    async deleteUser(id: string): Promise<User | null> {
        await UserRepository.update(id, {is_cancelled: true});
        return await this.getUserById(id);
    }
}