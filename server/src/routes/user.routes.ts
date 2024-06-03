import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user.controller';
import { validateDTO } from '../middleware/validation.middleware';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto';
import { authMiddleware } from '../middleware/auth.middleware';
import { authorizeMiddleware } from '../middleware/authorization.middleware';
const router = Router();

router.get('/', authMiddleware, authorizeMiddleware(['admin']),getUsers);
router.post('/', validateDTO(CreateUserDTO), createUser);
router.get('/:id', getUserById);
router.patch('/:id', authMiddleware,validateDTO(UpdateUserDTO), updateUser);
router.delete('/:id', deleteUser);

export default router;