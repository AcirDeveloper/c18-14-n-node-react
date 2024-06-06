import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto';

const profileService = new ProfileService();

export const getProfiles = async (req: Request, res: Response): Promise<void> => {
    try{
        const profiles = await profileService.getAllProfiles();
        res.status(200).json(users);
    }catch(error:any) {
        res.status(500).json({ message: error.message });
    }
};

export const getProfile = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
    
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const createUserDto: CreateUserDTO = req.body;
    try {
        const user = await userService.createUser(createUserDto);
        res.status(201).json(user);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
    
};

export const verifyProfile = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updateUserDto: UpdateUserDTO = req.body;
    try {
        const user = await profileService.updateUser(id, updateUserDto);
        user ? res.status(200).json(user) : res.status(404).json({ message: 'User not found' })
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
    
};
