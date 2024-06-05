import { AppDataSource } from '../database/data-source';
import { Profile } from '../entities/profile.entity';

export const ProfileRepository = AppDataSource.getRepository(Profile);