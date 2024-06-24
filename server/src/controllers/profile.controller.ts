import { Request, Response } from 'express';
import { ProfileService } from '../services/profile.service';
import { UpdateProfileDTO } from '../dtos/profile/verify-profile.dto';
import { CreateCreditCardDTO } from '../dtos/credit-card/create-credit-card.dto';

const profileService = new ProfileService();

export const getProfiles = async (req: Request, res: Response): Promise<void> => {
    try{
        const profiles = await profileService.getAllProfiles();
        res.status(200).json(profiles);
    }catch(error:any) {
        res.status(500).json({ message: error.message });
    }
};

export const getProfile = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await profileService.getProfile(id);
        if (!user) {
            res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(user);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
    
};

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updateProfileDto: UpdateProfileDTO = req.body;
    try {
        const profile = await profileService.updateProfile(id, updateProfileDto);
        profile ? res.status(200).json(profile) : res.status(404).json({ message: 'Profile not found' });
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
    
};

export const addCreditCard = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    const createCreditCardDto: CreateCreditCardDTO = req.body;
    try {
        await profileService.addCreditCard(id, createCreditCardDto);
        res.status(200).json({ message: 'Credit Card added successfully'});
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteCreditCard = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    try {
        await profileService.deleteCreditCard(id);
        res.status(401).json({ message: 'Credit Card deleted successfully'});
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
