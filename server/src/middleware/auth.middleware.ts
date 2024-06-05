import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await UserRepository.findOneBy({ id: decoded.id });
    if (!user) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  } catch (error:any) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
