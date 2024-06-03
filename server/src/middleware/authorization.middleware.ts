import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user.entity';

export const authorizeMiddleware = (roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({
            where: {
                id: req.user.id
            }, 
            relations: {
                roles: true
            }
        
        });

        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }

        const userRoles = user.roles.map(role => role.name);

        if (!roles.some(role => userRoles.includes(role))) {
            return res.status(403).send({ error: 'Forbidden, you are not authorized' });
        }

        next();
    };
};
