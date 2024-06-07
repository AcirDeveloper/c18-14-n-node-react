import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repositories/user.repository';

export const authorizeMiddleware = (roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const user = await UserRepository.findOne({
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
