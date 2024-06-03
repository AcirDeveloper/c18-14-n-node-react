import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto';

const userService = new UserService();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try{
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }catch(error:any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
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

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updateUserDto: UpdateUserDTO = req.body;
    try {
        const user = await userService.updateUser(id, updateUserDto);
        user ? res.status(200).json(user) : res.status(404).json({ message: 'User not found' })
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
    
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    
    try {
        const deletedUser = await userService.deleteUser(id);
        deletedUser ?  res.status(204).json(deleteUser) : res.status(404).json({ message: 'User not found' });
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}
